import track, { pauseTrack, resumeTrack } from "../../effect/track.js"
import { reactive } from "../../reactive.js"
import { isObject, RAW, TrackOpTypes } from "../../utils.js"


const noTrackArrayFunctions = ['pop', 'push', 'shift', 'unshift', 'splice']
const findItemArrayFunctions = ['includes', 'indexOf', 'lastIndexOf']
const overwriteArrayFunctions = overwriteArrayFunction()

export default function(target, prop) {
	if (prop === RAW) { return target }
	const r = Reflect.get(target, prop)

	// 依赖收集
	track(target, prop, TrackOpTypes.GET)

	if (isObject(r)) { return reactive(r) }

	if (Array.isArray(target) && overwriteArrayFunctions.hasOwnProperty(prop)) {
		return overwriteArrayFunctions[prop]
	}

	return r
}


function overwriteArrayFunction() {
	const overwriteArrayFunctions = {}

	findItemArrayFunctions.forEach(prop => {
		overwriteArrayFunctions[prop] = function(...args) {
			const r = Array.prototype[prop].apply(this, args)
			if (r === -1 || r === false) {
				return Array.prototype[prop].apply(this[RAW], args)
			}
			return r
		}
	})

	noTrackArrayFunctions.forEach(prop => {
		overwriteArrayFunctions[prop] = function(...args) {
			pauseTrack()
			const r = Array.prototype[prop].apply(this, args)
			resumeTrack()
			return r
		}
	})

	return overwriteArrayFunctions
}
