import trigger from "../../effect/trigger.js"
import { isEquals, TriggerOpTypes } from "../../utils.js"

export default function(target, prop, value) {
	const oldVal = target[prop]
	const oldLen = target.length

	const r = Reflect.set(target, prop, value)

	const type = target.hasOwnProperty(prop) ? TriggerOpTypes.SET : TriggerOpTypes.ADD

	if (r && !isEquals(oldVal, value)) {
		trigger(target, prop, type)
	}

	const newLen = target.length
	if (Array.isArray(target) && newLen !== oldLen) {
		if (prop === 'length') {
			// 显示修改length属性
			for (let i = newLen; i < oldLen; i++) {
				trigger(target, i, TriggerOpTypes.DELETE)
			}
		} else {
			// 隐式修改数组长度
			trigger(target, prop, TriggerOpTypes.DELETE)
		}
	}

	return r
}
