/*
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
	// // dp[i][j] 表示
	// // 以下标i-1为结尾的字符串word1
	// // 和以下标j-1为结尾的字符串word2
	// // 最近编辑距离为dp[i][j]
	// word1 = word1.split(''), word2 = word2.split('')
	// const m = word1.length, n = word2.length
	// if (m === 0 || n === 0) { return m || n }
	// const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
	// // 初始化：dp[i][0]编辑距离为i，一个空字符串添加i个字符才能和长度为i的字符相同
	// // 同理 dp[0][j]编辑距离为j
	// for (let i = 1; i <= m; i++) { dp[i][0] = i }
	// for (let j = 1; j <= n; j++) { dp[0][j] = j }
	// // 遍历
	// for (let i = 1; i <= m; i++) {
	// 	for (let j = 1; j <= n; j++) {
	// 		if (word1[i - 1] === word2[j - 1]) {
	// 			dp[i][j] = dp[i - 1][j - 1]
	// 		} else {
	// 			// dp[i - 1][j - 1] + 1 表示修改一个字符
	// 			// dp[i][j - 1] +1 或 dp[i - 1][j] + 1 表示增加或删除一个字符（这两个操作是相对的）
	// 			dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
	// 		}
	// 	}
	// 	// console.log(dp)
	// }
	// return dp[m][n]

	// 状态压缩
	word1 = word1.split(''), word2 = word2.split('')
	const m = word1.length, n = word2.length
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
				dp[j] = Math.min(dp[j], dp[j - 1], pre) + 1
			}
			pre = temp
		}
		// console.log(dp)
	}
	return dp[n]
};

const case1 = ['horse', 'ros']
console.log(minDistance(...case1))
