import { ITERATE, trackOpTypes, triggerOpTypes } from '../utils.js'
import { activeEffect, targetMap } from './effect.js'

const { GET, HAS, OWNKEYS } = trackOpTypes
const { SET, ADD, DELETE } = triggerOpTypes
const triggerTypesMap = {
	[SET]: [GET],
	[ADD]: [GET, HAS, OWNKEYS],
	[DELETE]: [GET, HAS, OWNKEYS],
}

export default function (target, type, prop) {
	const propMap = targetMap.get(target)
	if (!propMap) {
		return
	}

	const props = [prop]
	if (type === ADD || type === DELETE) {
		prop.push(ITERATE)
	}

	const runTask = new Set()

	for (const prop of props) {
		const typeMap = propMap.get(prop)
		if (!typeMap) {
			continue
		}
		for (const triggerType in triggerTypesMap) {
			const trackType = triggerTypesMap[triggerType]
			trackType.forEach((t) => {
				const set = typeMap.get(t)
				set?.forEach((fn) => {
					runTask.add(fn)
				})
			})
		}
	}

	if (runTask.size) {
		runTask.forEach((fn) => {
			if (fn !== activeEffect) {
				if (fn.opts?.scheduler) {
					fn.opts.scheduler(fn)
				} else {
					fn()
				}
			}
		})
	}
}
