/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
	// KMP解法:
	// // 如果文本串为：a b a b a b
	// // 最长相等前缀：a b a b _ _
	// // 最长相等后缀：_ _ a b a b
	// // 他们相差的部分为：a b 和 a b
	// // 这两个部分相同，文本串是由 a b 重复组成的
	// //
	// // 如果文本串为：a b c a b
	// // 最长相等前缀：a b _ _ _
	// // 最长相等后缀：_ _ _ a b
	// // 他们相差的部分为 c a b 和 a b c
	// // 这两个部分不同，所以不是由重复子串构成
	// //
	// // 代码实现：
	// // 构建next数组，获取最大相等前后缀长度
	// const n = s.length
	// s = Array.from(s)
	// const next = new Array(n).fill(0)
	// for (let i = 1, j = 0; i < n; i++) {
	// 	while (j > 0 && s[i] !== s[j]) { j = next[j - 1] }
	// 	if (s[i] === s[j]) { j++ }
	// 	next[i] = j
	// }
	// // 如果next[n-1]为0，说明s的最长相等前后缀为0，即不含重复子串
	// // 最长相等前后缀长度为next[n-1]，如果它不是文本串s的长度的倍数，说明s不由重复的字串组成
	// if (next[n - 1] !== 0 && n % (n - next[n - 1]) === 0) {
	// 	return true
	// }
	// return false

	// 移动匹配法
	return (s + s).slice(1, -1).includes(s)
};

const c1 = "abcabcabcabc"
const c2 = "ab"
console.log(repeatedSubstringPattern(c2))
