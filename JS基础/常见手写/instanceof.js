function isObject(target) {
	return typeof target === 'object' || typeof target === 'function'
}

function _instanceof(target, origin) {
	// target必须是一个对象
	if (target === null || !isObject(target)) {
		return false;
	}
	// origin必须是一个函数
	if (typeof origin !== 'function') {
		throw new TypeError('origin 必须是个函数');
	}
	// origin必须是一个对象
	if (origin.prototype === null || !isObject(origin.prototype)) {
		throw new TypeError('origin 没有合法的prototype属性');
	}
	let proto = Object.getPrototypeOf(target);
	while (proto) {
		if (proto === origin.prototype) {
			return true;
		}
		proto = Object.getPrototypeOf(proto); // 修正循环中的笔误
	}
	return false;
}

// console.log(_instanceof(() => { }, Function))
// console.log((() => { }) instanceof Function)
// console.log(_instanceof(null, Object))
// console.log(null instanceof Object)
// console.log(_instanceof(undefined, Object))
// console.log(undefined instanceof Object)
// console.log(_instanceof([], Object))
// console.log([] instanceof Object)
// console.log(_instanceof(() => { }, 66))
// console.log((() => { }) instanceof 66)
