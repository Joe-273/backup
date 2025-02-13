/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
	// const m = text1.length, n = text2.length
	// // dp[i][j]：长度为[0, i - 1]的字符串text1与长度为[0, j - 1]的字符串text2的最长公共子序列为dp[i][j]
	// // 初始化dp[0][j]和dp[i][0]表示一个空字符串和非空字符串，取最长的公共子序列长度
	// // 他们的公共子序列都为空字符，所以长度为0
	// const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
	// for (let i = 1; i <= m; i++) {
	// 	for (let j = 1; j <= n; j++) {
	// 		if (text1[i - 1] === text2[j - 1]) {
	// 			dp[i][j] = dp[i - 1][j - 1] + 1
	// 		} else {
	// 			dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
	// 		}
	// 	}
	// 	// console.log(dp)
	// }
	// return dp[m][n]

	// 状态压缩
	// dp[i][j]是由dp[i-1][j-1]或dp[i][j-1]或dp[i-1][j]推导而来
	// 所以可以将二维dp数组改为一维滚动数组
	const m = text1.length, n = text2.length
	const dp = new Array(n + 1).fill(0)
	for (let i = 1; i <= m; i++) {
		let pre = 0
		for (let j = 1; j <= n; j++) {
			const temp = dp[j]
			if (text1[i - 1] === text2[j - 1]) {
				dp[j] = pre + 1
			} else {
				dp[j] = Math.max(dp[j], dp[j - 1])
			}
			pre = temp
		}
		console.log(dp)
	}
	return dp[n]
};

const case1 = ["abcde", "ace"]
const case2 = ["abc", "def"]
const case3 = ["abcba", "abcbcba"]
console.log(longestCommonSubsequence(...case3))
[0, 0, 0, 0, 0, 0, 0, 0]
[0, 1, 1, 1, 1, 1, 1, 1]
[0, 1, 2, 2, 2, 2, 2, 2]
[0, 1, 2, 3, 3, 3, 3, 3]
[0, 1, 2, 3, 4, 4, 4, 4]
[0, 1, 2, 3, 4, 4, 4, 5]

