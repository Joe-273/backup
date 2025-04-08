function flat(arr, depth = Infinity) {
	if (depth === 0) {
		return arr
	}
	return arr.reduce((pre, cur) => {
		if (Array.isArray(cur)) {
			pre.push(...flat(cur, depth - 1))
		} else {
			pre.push(cur)
		}
		return pre
	}, [])
}

const arr = flat([1, 2, 3, [4, 5, 6, [6, 7, 8, [9, 11, 12, [13, 14]]]]], 2)
console.log(arr)
