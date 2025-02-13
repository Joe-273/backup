import get from './handler/get.js'
import set from './handler/set.js'
import has from './handler/has.js'
import ownKeys from './handler/ownKeys.js'
import deleteProperty from './handler/deleteProperty.js'
import { isObject } from './utils.js'

const proxyMap = new WeakMap()

export const reactive = function (target) {
	// Target must be a object
	if (!isObject(target)) {
		return target
	}

	// Find proxy object from cache
	if (proxyMap.has(target)) {
		return proxyMap.get(target)
	}

	const proxy = new Proxy(target, {
		get: get,
		set: set,
		has: has,
		ownKeys: ownKeys,
		deleteProperty: deleteProperty,
	})

	// Cache the proxy object
	proxyMap.set(target, proxy)

	return proxy
}
