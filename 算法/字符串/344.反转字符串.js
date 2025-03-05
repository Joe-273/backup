/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
	const n = s.length
	for (let i = 0, j = n - 1; i < n >> 1; i++, j--) {
		const t = s[i]
		s[i] = s[j]
		s[j] = t
	}
};

const c = ["h", "e", "l", "l", "o"]
console.log(reverseString(c))
