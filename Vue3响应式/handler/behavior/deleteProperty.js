import trigger from "../../effect/trigger.js"
import { TriggerOpTypes } from "../../utils.js"

export default function(target, prop) {
	const hasProp = target.hasOwnProperty(prop)

	const r = Reflect.deleteProperty(target, prop)

	if (hasProp) {
		trigger(target, prop, TriggerOpTypes.DELETE)
	}

	return r
}
