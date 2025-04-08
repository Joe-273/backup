import { ITERATE_KEY, TrackOpTypes } from "../utils.js"
import { activeEffect, targetMap } from "./effect.js"

let canTrack = true

export function pauseTrack() {
	canTrack = false
}

export function resumeTrack() {
	canTrack = true
}

export default function(target, prop, type) {
	if (!canTrack || !activeEffect) { return }

	let propMap = targetMap.get(target)
	if (!propMap) {
		propMap = new Map()
		targetMap.set(target, propMap)
	}

	if (type === TrackOpTypes.ITERATE) {
		prop = ITERATE_KEY
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
