/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
	let l = -1, r = num + 1
	while (l + 1 != r) {
		const m = l + (r - l >>> 1)
		if (m <= num / m) {
			l = m
		} else {
			r = m
		}
	}
	return l === num / l
};

const c = 16
console.log(isPerfectSquare(c))
