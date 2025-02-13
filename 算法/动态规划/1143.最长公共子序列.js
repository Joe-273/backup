/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
	// dp[i][j]：长度为[0, i - 1]的字符串text1与长度为[0, j - 1]的字符串text2的最长公共子序列为dp[i][j]
	// 递推公式
	// 如果text1[i - 1] 与 text2[j - 1]相同，那么找到了一个公共元素，所以dp[i][j] = dp[i - 1][j - 1] + 1;
	// 如果text1[i - 1] 与 text2[j - 1]不相同，
	// 那就看看text1[0,i-2]与text2[0,j-1]的最长公共子序列 和 text1[0,i-1]与text2[0,j-2]的最长公共子序列，取最大的。
	// 也就是dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
	// 初始化
	// dp[i][0]=0, dp[0][j]=0, 相当于一个空数组跟另一个非空数组取最长公共子序列，那么长度为0
	text1 = text1.split(''), text2 = text2.split('')
	const m = text1.length, n = text2.length
	const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
	// 遍历
	// 因为dp[i][j] 由dp[i-1][j-1]或者dp[i-1][j-2]或者dp[i-2][j-1]推导而来
	// 所以从上往下，从左往右遍历
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (text1[i - 1] === text2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1
			} else {
				dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
			}
		}
		// console.log(dp)
	}
	return dp[m][n]
};

const case1 = ["abcde", "ace"]
console.log(longestCommonSubsequence(...case1))
