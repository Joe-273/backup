import handler from './handler/index.js'
import { isObject } from './utils.js'

const proxyMap = new WeakMap()
export function reactive(target) {
	if (!isObject(target)) {
		return target
	}

	if (proxyMap.has(target)) {
		return proxyMap.get(target)
	}

	const proxy = new Proxy(target, handler)

	proxyMap.set(target, proxy)

	return proxy
}
