import track from "../../effect/track.js"
import { TrackOpTypes } from "../../utils.js"

export default function(target, prop) {
	const r = Reflect.ownKeys(target)
	track(target, prop, TrackOpTypes.ITERATE)
	return r
}

