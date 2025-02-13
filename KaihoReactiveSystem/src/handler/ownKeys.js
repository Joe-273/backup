import track from '../effects/track.js'
import { trackOpTypes } from '../utils.js'

export default function (target) {
	track(target, trackOpTypes.OWNKEYS)
	return Reflect.ownKeys(target)
}
