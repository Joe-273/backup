export const RAW = Symbol('RAW')
export const ITERATE_KEY = Symbol('ITERATE_KEY')

export const TrackOpTypes = {
	GET: 'get',
	HAS: 'has',
	ITERATE: 'iterate'
}

export const TriggerOpTypes = {
	SET: 'set',
	ADD: 'add',
	DELETE: 'delete',
}

export function isObject(target) {
	return target !== null && typeof target === 'object'
}
export function isEquals(t1, t2) {
	return Object.is(t1, t2)
}
