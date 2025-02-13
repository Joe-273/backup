
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
	s = s.split('')
	const n = s.length
	let ans = 0
	// 长度为n的字符串，可能的中心点有2*n-1个
	// 比如'abc'中心点有5个：a, ab, b, bc, c
	for (let i = 0; i < 2 * n - 1; i++) {
		let l = i >> 1 // 左指针
		let r = l + i % 2 // 右指针

		while (l >= 0 && r < n && s[l] === s[r]) {
			ans++, l--, r++
		}
	}
	return ans
}

const case1 = 'abc'
const case2 = "fdsklf"
const case3 = "aaa"
console.log(countSubstrings(case2))
