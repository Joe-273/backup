/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
	// // dp[i][j]：
	// // 以i-1为结尾的字符串word1，和以j-1位结尾的字符串word2
	// // 想要达到相等，所需要删除元素的最少次数
	// word1 = word1.split(''), word2 = word2.split('')
	// const m = word1.length, n = word2.length
	// const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
	// // 初始化：
	// // dp[0][j]，表示word2到j-1的下标结尾的字符串，最少删除多少次，才能变成空字符串
	// // dp[i][0]，表示word1到i-1的下标结尾的字符串，最少删除多少次，才能变成空字符串
	// for (let i = 1; i <= m; i++) { dp[i][0] = i }
	// for (let j = 1; j <= n; j++) { dp[0][j] = j }
	// // 遍历
	// for (let i = 1; i <= m; i++) {
	// 	for (let j = 1; j <= n; j++) {
	// 		if (word1[i - 1] === word2[j - 1]) {
	// 			// 相等的情况
	// 			dp[i][j] = dp[i - 1][j - 1]
	// 		} else {
	// 			// 不相等的情况
	// 			// 要么不考虑word1[i-1]，要么不考虑word2[j-1]
	// 			// 也就是模拟删除这两个的其中一个，取dp的最小值
	// 			// dp[i][j] = Math.min(dp[i][j - 1] + 1, dp[i - 1][j] + 1, dp[i - 1][j - 1] + 2)
	// 			// dp[i - 1][j - 1] + 2 已经包含了dp[i][j - 1]+1 和 dp[i - 1][j] + 1
	// 			// dp[i][j] = Math.min(dp[i][j - 1] + 1, dp[i - 1][j] + 1)
	// 			dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + 1
	// 		}
	// 	}
	// 	// console.log(dp)
	// 	/*
	// 			 e  t  c  o
	// 		0, 1, 2, 3, 4
	// 	l 1, 2, 3, 4, 5
	// 	e 2, 1, 2, 3, 4
	// 	e 3, 2, 3, 4, 5
	// 	t 4, 3, 2, 3, 4
	// 	c 5, 4, 3, 2, 3
	// 	o 6, 5, 4, 3, 2
	// 	d 7, 6, 5, 4, 3
	// 	e 8, 7, 6, 5, 4
	// 	*/
	// }
	// return dp[m][n]

	// 状态压缩
	word1 = word1.split(''), word2 = word2.split('')
	const m = word1.length, n = word2.length
	let dp = new Array(n + 1).fill(0)
	// 初始化第一行
	for (let j = 1; j <= n; j++) { dp[j] = j }
	// 遍历
	for (let i = 1; i <= m; i++) {
		let pre = dp[0]
		dp[0] = i
		for (let j = 1; j <= n; j++) {
			const temp = dp[j]
			if (word1[i - 1] === word2[j - 1]) {
				dp[j] = pre
			} else {
				dp[j] = Math.min(dp[j], dp[j - 1]) + 1
			}
			pre = temp
		}
		// console.log(dp)
	}
	return dp[n]

	// 还有一种方法，就是求出最长公共子序列长度后
	// 然后求出两个字符串长度分别减去公共子序列长度后的和
	// 即为结果
};

const case1 = ['leetcode', 'etco']
console.log(minDistance(...case1))
