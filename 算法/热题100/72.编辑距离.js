/*
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
	// word1 = word1.split(''), word2 = word2.split('')
	// const m = word1.length, n = word2.length
	// if (m === 0 || n === 0) { return m || n }
	//
	// const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
	// // 初始化
	// for (let i = 1; i <= m; i++) { dp[i][0] = i }
	// for (let j = 1; j <= n; j++) { dp[0][j] = j }
	// for (let i = 1; i <= m; i++) {
	// 	for (let j = 1; j <= n; j++) {
	// 		if (word1[i - 1] === word2[j - 1]) {
	// 			dp[i][j] = dp[i - 1][j - 1]
	// 		} else {
	// 			dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1
	// 		}
	// 	}
	// }
	// // console.log(dp)
	// return dp[m][n]

	// 状态压缩
	word1 = word1.split(''), word2 = word2.split('')
	const m = word1.length, n = word2.length
	if (m === 0 || n === 0) { return m || n }
	const dp = new Array(n + 1)
	for (let i = 0; i <= n; i++) { dp[i] = i }

	for (let i = 1; i <= m; i++) {
		let pre = dp[0]
		dp[0] = i
		for (let j = 1; j <= n; j++) {
			const temp = dp[j]
			if (word1[i - 1] === word2[j - 1]) {
				dp[j] = pre
			} else {
				dp[i] = Math.min(dp[j], dp[j - 1], pre) + 1
			}
			pre = temp
		}
	}
	return dp[n]
};

const case1 = ['horse', 'ros']
console.log(minDistance(...case1))
