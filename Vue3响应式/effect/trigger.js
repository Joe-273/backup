import { TrackOpTypes, TriggerOpTypes } from "../utils.js"
import { activeEffect, targetMap } from "./effect.js"

const { GET, HAS, ITERATE } = TrackOpTypes
const { SET, ADD, DELETE } = TriggerOpTypes
const triggerTypesMap = {
	[SET]: [GET],
	[ADD]: [GET, HAS, ITERATE],
	[DELETE]: [GET, HAS, ITERATE],
}

function getEffects(target, prop, type) {
	const runTask = new Set()

	const propMap = targetMap.get(target)
	if (!propMap) {
		return
	}

	const props = [prop]
	if (type === ADD || type === DELETE) {
		props.push(ITERATE)
	}

	for (const prop of props) {
		const typeMap = propMap.get(prop)
		if (!typeMap) { continue }

		triggerTypesMap[type].forEach(trackType => {
			const depsSet = typeMap.get(trackType)
			depsSet.forEach(task => {
				runTask.add(task)
			});
		})
	}

	return runTask
}

export default function(target, prop, type) {
	const effects = getEffects(target, prop, type)
	if (!effects) { return }
	effects.forEach(effect => {
		if (effect !== activeEffect) {
			const scheduler = effect.opts.scheduler
			if (scheduler && typeof scheduler === 'function') {
				scheduler(effect)
			} else {
				effect()
			}
		}
	})
}

