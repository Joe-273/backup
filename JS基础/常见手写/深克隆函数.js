function deepClone(target, depth = Infinity, cache = new WeakMap()) {
	// 控制层数
	if (depth === 0) {
		return target
	}
	// 查看缓存，构建循环引用
	if (cache.has(target)) {
		return cache.get(target)
	}
	// 不是对象
	if (target === null || typeof target !== 'object') {
		return target
	}

	// 创建对象，存入缓存
	const r = new target.constructor()
	cache.set(target, r)
	// 处理对象
	if (Array.isArray(r)) {
		target.forEach(i => {
			r.push(deepClone(i, depth - 1, cache))
		})
		return r
	}
	if (Object.prototype.toString.call(r) === '[object Set]') {
		target.forEach(i => {
			r.add(deepClone(i, depth - 1, cache))
		})
		return r
	}
	if (Object.prototype.toString.call(r) === '[object Map]') {
		target.forEach((val, key) => {
			r.set(deepClone(key, depth - 1, cache), deepClone(val, depth - 1, cache))
		})
		return r
	}
	if (Object.prototype.toString.call(r) === '[object RegExp]') {
		return new target.constructor(target.source, target.flags)
	}
	if (Object.prototype.toString.call(r) === '[object Object]') {
		const descs = Object.getOwnPropertyDescriptor(target)
		for (const key of Reflect.ownKeys(target)) {
			// 获取属性描述符
			const desc = descs[key]
			// 如果是存取器属性
			if (desc.get || desc.get) {
				Object.defineProperty(r, key, desc)
				continue
			}
			// 普通属性则克隆value
			desc.value = deepClone(desc.val, depth - 1, cache)
			Object.defineProperty(r, key, desc)
		}
		return r
	}

	// 其他情况
	return new target.constructor(target)
}

