/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
	const n = s.length
	s = Array.from(s)
	for (let i = 0; i < n; i += 2 * k) {
		let l = i
		let r = Math.min(i + k, n) - 1
		do {
			const t = s[l]
			s[l] = s[r], s[r] = t
		} while (++l < --r)
	}
	return s.join('')
};

const c = ["abcdefg", 2]
console.log(reverseStr(...c))
