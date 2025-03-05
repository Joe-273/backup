/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
	let l = -1, r = x + 1
	while (l + 1 !== r) {
		// const m = Math.floor(l + (r - l) / 2)
		const m = l + ((r - l) >>> 1)
		if (m * m <= x) {
			l = m
		} else {
			r = m
		}
	}
	return l

};

const c = 2147483647
console.log(mySqrt(c))
