import { effect } from './effects/effect.js'
import track from './effects/track.js'
import trigger from './effects/trigger.js'
import { trackOpTypes, triggerOpTypes } from './utils.js'

function normalizeArgs(getterOrOpts) {
	if (typeof getterOrOpts === 'function') {
		return {
			getter: getterOrOpts,
			setter() {
				console.warn('There is no setter')
			},
		}
	} else {
		const { setter, getter } = getterOrOpts
		return {
			getter,
			setter,
		}
	}
}

export function computed(getterOrOpts) {
	const { getter, setter } = normalizeArgs(getterOrOpts)

	let dirty = true
	let value = null

	const effectFn = effect(getter, {
		lazy: true,
		scheduler() {
			dirty = true
			trigger(computedResult, triggerOpTypes.SET, 'value')
		},
	})

	const computedResult = {
		get value() {
			track(computedResult, trackOpTypes.GET, 'value')
			if (dirty) {
				dirty = false
				value = effectFn()
			}
			return value
		},
		set value(value) {
			setter(value)
		},
	}

	return computedResult
}
