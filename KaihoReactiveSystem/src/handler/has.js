import track from '../effects/track.js'
import { trackOpTypes } from '../utils.js'

export default function (target, prop) {
	track(target, trackOpTypes.HAS, prop)
	return Reflect.has(target, prop)
}
