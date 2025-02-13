import trigger from '../effects/trigger.js'
import { triggerOpTypes } from '../utils.js'

export default function (target, prop) {
	const hasKey = target.hasOwnProperty(prop)
	const result = Reflect.deleteProperty(target, prop)

	if (hasKey && result) {
		trigger(target, triggerOpTypes.DELETE, prop)
	}

	return result
}
