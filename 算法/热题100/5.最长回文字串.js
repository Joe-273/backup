/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	// const m = s.length
	// if (m <= 1) { return s }
	// // dp[i][j]含义：s[i..j]是否为回文子串
	// const dp = Array.from({ length: m }, () => new Array(m).fill(false))
	// // 所以遍历顺序从下到上，从右到左
	// let maxLen = 1, start = 0
	// for (let i = m - 1; i >= 0; i--) {
	// 	for (let j = i; j < m; j++) {
	// 		if (s[i] === s[j]) {
	// 			if (j - i <= 1) {
	// 				// 这里处理了i===j 或者i+1===j的情况
	// 				// 例如 'a' 或者 'aa'
	// 				dp[i][j] = true
	// 			} else {
	// 				dp[i][j] = dp[i + 1][j - 1]
	// 			}
	// 			if (dp[i][j] && j - i + 1 > maxLen) {
	// 				maxLen = j - i + 1
	// 				start = i
	// 			}
	// 		}
	// 	}
	// }
	// return s.slice(start, start + maxLen)

	// // 状态压缩
	// // dp[i][j]仅依赖dp[i+1][j-1]，可以将二维dp转为一维滚动数组
	// const m = s.length
	// if (m <= 1) { return s }
	// const dp = new Array(m).fill(false)
	// let maxLen = 1, start = 0
	// for (let i = m - 1; i >= 0; i--) {
	// 	let pre
	// 	for (let j = m - 1; j >= i; j--) {
	// 		pre = dp[j]
	// 		if (s[i] === s[j]) {
	// 			if (j - i <= 1) {
	// 				dp[j] = true
	// 			} else if (dp[j - 1]) {
	// 				dp[j] = true
	// 			} else {
	// 				dp[j] = false
	// 			}
	// 			if (dp[j] && j - i + 1 > maxLen) {
	// 				maxLen = j - i + 1
	// 				start = i
	// 			}
	// 		} else {
	// 			dp[j] = false
	// 		}
	// 	}
	// }
	// return s.slice(start, start + maxLen)

	// 中心拓展法
	const m = s.length
	// 长度为m的字符串，可能的中心点有2*m-1个
	// 比如'abc'中心点有5个：a, ab, b, bc, c
	let l = 0, r = 0, maxLen = 1, start = 0
	for (let i = 0; i < m * 2 - 1; i++) {
		l = i >> 1 // 左指针
		r = l + i % 2 // 右指针
		while (l >= 0 && r < m && s[l] === s[r]) { l--, r++ }
		// 修正l和r的指针位置到最长的回文子串两侧
		l += 1, r -= 1
		if (r - l + 1 > maxLen) {
			maxLen = r - l + 1
			start = l
		}
	}
	return s.slice(start, start + maxLen)
};

const case1 = "cbbd"
console.log(longestPalindrome(case1))
