function mtd(a, b, c, d, e) {
	console.log('ARGS>>>', a, b, c, d, e)
	return a + b + c + d + e
}

function curry(f, ...args) {
	const placeHolder = undefined
	const argsArr = []
	const placeHolderIndexSet = new Set()

	function curried(...args) {
		args.forEach(arg => {
			if (placeHolderIndexSet.size) {
				const i = [...placeHolderIndexSet].shift()
				argsArr[i] = arg
				placeHolderIndexSet.delete(i)
			} else {
				argsArr.push(arg)
			}
		})

		argsArr.forEach((v, i) => {
			if (v === placeHolder) {
				placeHolderIndexSet.add(i)
			}
		})

		if (placeHolderIndexSet.size === 0 && argsArr.length >= f.length) {
			return f(...argsArr)
		} else {
			return (...args) => curried(...args)
		}
	}

	return curried(...args)
}

// 参数传递足够，直接运行真实函数
const f1 = curry(mtd, 1, 2, 3, 4, 5) // -> 15
// 参数传递不够，返回一个新函数
const f2 = curry(mtd, undefined, undefined, 3, 4)
const f3 = curry(mtd, 1)
const f4 = curry(mtd)
// 直到参数传递足够后，才会调用真实函数
console.log(f2(1, 2)(5)) // -> 15
console.log(f3(2)(3)(4)(5)) // -> 15
console.log(f4(1, 2, 3, 4, 5)) // -> 15

///////////////////////////////

function add(...args) {
	const argsArr = args
	const getR = () => {
		let r = 0
		for (let i = 0; i < argsArr.length; i++) {
			r += argsArr[i]
		}
		return r
	}

	return function _add(...args) {
		if (args.length === 0) {
			return getR()
		}
		argsArr.push(...args)
		return _add
	}
}

// const r = add(1, 2, 3, 4, 5)()
// console.log(r)

