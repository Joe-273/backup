function deepClone(target, wm = new WeakMap()) {
	// 如果有缓存
	if (wm.has(target)) {
		return wm.get(target)
	}
	// 如果不是对象
	if (target === null || typeof target !== 'object') {
		return target
	}
	// 创建对象
	const r = new target.constructor()
	// 缓存对象
	wm.set(target, r)
	// 如果是数组
	if (Array.isArray(r)) {
		target.forEach(v => {
			r.push(deepClone(v, wm))
		})
		return r
	}
	// 如果是Set
	if (Object.prototype.toString.call(r) === '[object Set]') {
		target.forEach(v => {
			r.add(deepClone(v, wm))
		});
		return r
	}
	// 如果是Map
	if (Object.prototype.toString.call(r) === '[object Map]') {
		target.forEach((value, key) => {
			r.set(deepClone(key, wm), deepClone(value, wm))
		})
		return r
	}
	// 如果是正则表达式对象
	if (Object.prototype.toString.call(r) === '[object RegExp]') {
		return target.constructor(target.source, target.flags)
	}
	// 如果是普通对象
	if (Object.prototype.toString.call(r) === '[object Object]') {
		const descs = Object.getOwnPropertyDescriptors(target)
		for (const key of Reflect.ownKeys(descs)) {
			const desc = descs[key]
			// Getter/Setter直接拷贝
			if (desc.get || desc.set) {
				Object.defineProperty(r, key, desc)
				continue
			}
			// 深克隆value属性
			desc.value = deepClone(desc.value, wm)
			Object.defineProperty(r, key, desc)
		}
		return r
	}
	// 其他情况
	// 日期对象，正则等待
	return new target.constructor(target)
}

module.exports = deepClone
