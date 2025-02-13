const so = { name: 'Joe' }
const o1 = {
	name: 'Qihao',
	none1: null,
	none2: undefined,
	func() { },
	set: new Set([1, 2, 3, 4, so]),
	map: new Map([[1, 2], [3, so]]),
	reg: /Joe/,
	symbol: Symbol('666')
}
const circle = { loop: o1 }
o1.circle = circle
const o2 = deepClone(o1)
so.name = 'JJOOEE'
o1.reg = /Qihao/
o1.set.add(666)
o1.map.set(4, 5)

function deepClone(t, cache = new WeakMap()) {
	if (cache.has(t)) {
		return cache.get(t)
	}

	if (typeof t !== 'object' || t === null) {
		return t
	}

	let r = new t.constructor()
	cache.set(t, r)

	if (Array.isArray(r)) {
		t.forEach(i => {
			r.push(i)
		})
	} else if (Object.prototype.toString.call(r) === '[object Set]') {
		t.forEach(i => {
			r.add(deepClone(i, cache))
		})
	} else if (Object.prototype.toString.call(r) === '[object Map]') {
		t.forEach((v, k) => {
			r.set(k, deepClone(v, cache))
		})
	} else if (Object.prototype.toString.call(r) === '[object Object]') {
		for (const k in t) {
			if (t.hasOwnProperty(k)) {
				r[k] = deepClone(t[k], cache)
			}
		}
	} else {
		r = new t.constructor(t)
	}

	return r
}

console.log(o1)
console.log(o2)
