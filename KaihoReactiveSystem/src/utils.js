export function isObject(o) {
	return o !== null && typeof o === 'object'
}

export function hasChanged(v1, v2) {
	return !Object.is(v1, v2)
}

export const trackOpTypes = {
	GET: 'Get',
	HAS: 'Has',
	OWNKEYS: 'Ownkeys',
}

export const triggerOpTypes = {
	SET: 'Set',
	ADD: 'Add',
	DELETE: 'Delete',
}

export const RAW = Symbol('Raw')
export const ITERATE = Symbol('iterate')
