// function flatten(arr, depth = Infinity) {
// 	if (!depth) { return arr }
// 	const res = []
// 	for (const item of arr) {
// 		if (Array.isArray(item)) {
// 			res.push(...flatten(item, depth - 1))
// 			continue
// 		}
// 		res.push(item)
// 	}
// 	return res
// }
function flatten(arr, depth = Infinity) {
	if (!depth) { return arr }
	return arr.reduce((previous, current) => {
		if (Array.isArray(current)) {
			previous.push(...flatten(current, depth - 1))
		} else {
			previous.push(current)
		}
		return previous
	}, [])
}

// const arr = flatten([1, 2, 3, [4, 5, 6, [6, 7, 8, [9, 11, 12, [13, 14]]]]], 2)
// console.log(arr)
