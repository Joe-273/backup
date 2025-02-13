import { trackOpTypes, ITERATE } from '../utils.js'
import { targetMap, activeEffect } from './effect.js'

let shouldTrack = true

export default function (target, type, prop) {
	// Don't track out of effect function
	if (!shouldTrack || !activeEffect) {
		return
	}

	let propMap = targetMap.get(target)
	if (!propMap) {
		propMap = new Map()
		targetMap.set(target, propMap)
	}

	if (type === trackOpTypes.OWNKEYS) {
		prop = ITERATE
	}
	let typeMap = propMap.get(prop)
	if (!typeMap) {
		typeMap = new Map()
		propMap.set(prop, typeMap)
	}

	let depsSet = typeMap.get(type)
	if (!depsSet) {
		depsSet = new Set()
		typeMap.set(type, depsSet)
	}

	depsSet.add(activeEffect)
	activeEffect.deps.push(depsSet)
}

export function pauseTrack() {
	shouldTrack = false
}
export function resumeTrack() {
	shouldTrack = true
}
