import { isObject, RAW, trackOpTypes } from '../utils.js'
import track, { pauseTrack, resumeTrack } from '../effects/track.js'
import { reactive } from '../reactive.js'

const findItemArray = ['includes', 'indexOf', 'lastIndexOf']
const noTrackArray = ['push', 'pop', 'shift', 'unshift', 'splice']
const overwriteArrayFuncs = {}
findItemArray.forEach((i) => {
	overwriteArrayFuncs[i] = function (...args) {
		const result = Array.prototype[i].apply(this, args)
		if (result === -1 || result === false) {
			return Array.prototype[i].apply(this[RAW], args)
		}
		return result
	}
})
noTrackArray.forEach((i) => {
	overwriteArrayFuncs[i] = function (...args) {
		pauseTrack()
		const result = Array.prototype[i].apply(this, args)
		resumeTrack()
		return result
	}
})

export default function (target, prop) {
	// Extra for getting origin target
	if (prop === RAW) {
		return target
	}

	const result = Reflect.get(target, prop)

	// Prop must be existed
	if (result) {
		track(target, trackOpTypes.GET, prop)
	}

	// Return the overwritr prop(function)
	if (Array.isArray(target) && overwriteArrayFuncs.hasOwnProperty(prop)) {
		return overwriteArrayFuncs[prop]
	}

	// Deep proxy when the prop was a object
	if (isObject(result)) {
		return reactive(result)
	}

	return result
}
