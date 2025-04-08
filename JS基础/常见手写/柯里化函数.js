// export function curry(fn, ...args) {
// 	curry._ = curry._ || Symbol('placeholder')
// 	const context = this
// 	return curried(args)
//
// 	function curried(argsArr) {
// 		return function(...args) {
// 			const curArgs = Array.from(argsArr)
// 			const placeholderIndices = []
// 			// 获取占位符下标
// 			curArgs.forEach((arg, idx) => {
// 				if (arg === curry._) {
// 					placeholderIndices.push(idx)
// 				}
// 			})
// 			// 传入新参数
// 			args.forEach(arg => {
// 				if (placeholderIndices.length) {
// 					curArgs[placeholderIndices.shift()] = arg
// 				} else {
// 					curArgs.push(arg)
// 				}
// 			})
// 			// 尝试调用函数
// 			if (curArgs.indexOf(curry._) === -1 && curArgs.length >= fn.length) {
// 				return fn.apply(context, curArgs);
// 			} else {
// 				return curried(curArgs)
// 			}
// 		}
// 	}
// }

export function curry(fn, ...args) {
	curry._ = curry._ || Symbol('placeholder')
	const ctx = this
	return curried(args)

	function curried(argsArr) {
		return function(...args) {
			const curArgsArr = Array.from(argsArr)

			const placeholderIndices = []
			curArgsArr.forEach((arg, idx) => {
				if (arg === curry._) {
					placeholderIndices.push(idx)
				}
			})

			args.forEach(arg => {
				if (placeholderIndices.length) {
					curArgsArr[placeholderIndices.shift()] = arg
				} else {
					curArgsArr.push(arg)
				}
			})

			if (curArgsArr.indexOf(curry._) === -1 && curArgsArr.length >= fn.length) {
				return fn.apply(ctx, curArgsArr)
			} else {
				return curried(curArgsArr)
			}
		}
	}
}
