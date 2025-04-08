import { effect } from "./effect/effect.js"
import track from "./effect/track.js"
import trigger from "./effect/trigger.js"
import { reactive } from "./reactive.js"
import { TrackOpTypes, TriggerOpTypes } from "./utils.js"

function normalize(opts) {
	let getter, setter
	if (typeof opts === 'function') {
		getter = opts
		setter = () => {
			console.warn('It has no setter')
		}
	} else {
		getter = opts.get
		setter = opts.set
	}
	return { getter, setter }
}

const s = reactive({ a: 1, b: 2 })
const sum = computed(() => {
	console.log('run')
	return s.a + s.b
})
effect(() => {
	console.log('RENDER', sum.value)
})

s.a = 10

export function computed(getterOrOptions) {
	const { getter, setter } = normalize(getterOrOptions)
	const effectFn = effect(getter, {
		lazy: true, scheduler() {
			dirty = true
			trigger(_computed, 'value', TriggerOpTypes.SET)
		}
	})

	let value = null
	let dirty = true
	const _computed = {
		get value() {
			track(_computed, 'value', TrackOpTypes.GET)
			if (dirty) {
				value = effectFn()
				dirty = false
			}
			return value
		},
		set value(value) {
			return setter(value)
		}
	}

	return _computed
}


