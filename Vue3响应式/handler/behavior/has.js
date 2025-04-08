import track from "../../effect/track.js"
import { TrackOpTypes } from "../../utils.js"

export default function(target, prop) {
	const r = Reflect.has(target, prop)
	track(target, prop, TrackOpTypes.HAS)
	return r
}
