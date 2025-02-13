import trigger from '../effects/trigger.js'
import { hasChanged, triggerOpTypes } from '../utils.js'

export default function (target, prop, newValue) {
	const oldValue = target[prop]
	const oldLength = Array.isArray(target) && target.length

	const type = target.hasOwnProperty(prop)
		? triggerOpTypes.SET
		: triggerOpTypes.ADD

	const result = Reflect.set(target, prop, newValue)

	if (!result) {
		return result
	}

	// Don't trigger when value is not changed
	if (hasChanged(oldValue, newValue)) {
		trigger(target, type, prop)
	}

	// Extra process for array
	const newLength = target.length
	if (Array.isArray(target) && oldLength !== newLength) {
		if (oldLength < newLength) {
			if (prop !== 'length') {
				trigger(target, triggerOpTypes.SET, 'length')
			}
		} else {
			for (let i = oldLength; i > newLength; i--) {
				trigger(target, triggerOpTypes.DELETE, i.toString())
			}
		}
	}

	return result
}
