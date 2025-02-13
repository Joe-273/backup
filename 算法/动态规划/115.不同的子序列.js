/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
	// // dp[i][j]：以i-1结尾的s中有以j-1结尾的t的个数
	// s = s.split(''), t = t.split('')
	// const m = s.length, n = t.length
	// const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
	// // 初始化dp[i][0]=1, dp[0][j]=0, dp[0][0]=1
	// for (let i = 0; i <= m; i++) {
	// 	dp[i][0] = 1
	// }
	// // 遍历
	// for (let i = 1; i <= m; i++) {
	// 	for (let j = 1; j <= n; j++) {
	// 		if (s[i - 1] === t[j - 1]) {
	// 			dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
	// 		} else {
	// 			dp[i][j] = dp[i - 1][j]
	// 		}
	// 	}
	// 	// console.log(dp)
	// }
	// return dp[m][n]

	// 状态压缩，因为dp[i][j]由dp[i-1][j] 和dp[i-1][j-1]推导而来
	// 可以将二维dp压缩为一维dp
	s = s.split(''), t = t.split('')
	const m = s.length, n = t.length
	const dp = new Array(n + 1).fill(0)
	// 初始化
	dp[0] = 1
	for (let i = 1; i <= m; i++) {
		for (let j = n; j >= 0; j--) {
			if (s[i - 1] === t[j - 1]) {
				dp[j] = dp[j] + dp[j - 1]
			}
		}
	}
	return dp[n]
};

const case1 = ["rabbbit", "rabbit"]
console.log(numDistinct(...case1))
