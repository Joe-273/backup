import { cleanup, effect } from './effects/effect.js'

function traverse(value, seen = new Set()) {
	if (typeof value !== 'object' || value !== null || seen.has(value)) {
		return
	}
	seen.add(value)

	for (const key in value) {
		traverse(value[key], seen)
	}

	return value
}

export function watch(source, cb, opts) {
	let getter
	if (typeof source === 'function') {
		getter = source
	} else {
		getter = () => traverse(source)
	}

	let oldValue, newValue

	const job = (() => {
		if (opts.once) {
			let alreadyRun = false
			return () => {
				newValue = effectFn()
				if (!alreadyRun) {
					cb(oldValue, newValue)
					alreadyRun = true
				}
				oldValue = newValue
			}
		} else {
			return () => {
				newValue = effectFn()
				cb(oldValue, newValue)
				oldValue = newValue
			}
		}
	})()

	const effectFn = effect(
		() => {
			return getter()
		},
		{
			lazy: true,
			scheduler: () => {
				if (opts.flush === 'post') {
					Promise.resolve().then(job)
				} else {
					job()
				}
			},
		},
	)

	// Run getter to track
	if (opts.immediate) {
		job()
	} else {
		effectFn()
	}

	return () => {
		cleanup(effectFn)
	}
}
