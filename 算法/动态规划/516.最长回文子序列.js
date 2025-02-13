/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
	// // dp[i][j]：字符串s在[i, j]范围内最长的回文子序列的长度为dp[i][j]
	// // i == j 时：dp[i][j] == dp[i+1][j-1] + 2
	// // i != j 时：dp[i][j] == max(dp[i][j-1], dp[i+1][j])
	// s = s.split('')
	// const length = s.length
	// // 初始化：
	// // dp[i][j]，当i，j相同时（代表单个字符的时候），dp[i][j]==1
	// const dp = Array.from({ length }, () => new Array(length).fill(0))
	// for (let i = 0; i < length; i++) { dp[i][i] = 1 }
	// // 遍历：由递推公式得：从左到右，从下到上
	// for (let i = length - 1; i >= 0; i--) {
	// 	for (let j = i + 1; j < length; j++) {
	// 		if (s[i] === s[j]) {
	// 			dp[i][j] = dp[i + 1][j - 1] + 2
	// 		} else {
	// 			dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
	// 		}
	// 	}
	// 	// console.log(dp)
	// }
	// return dp[0][length - 1]

	// 状态压缩
	// 因为dp[i][j]是由dp[i+1][j-1]，dp[i][j-1]，dp[i+1][j]推导来的
	// 所以可将二维dp数组改为一维滚动数组
	s = s.split('')
	const m = s.length
	const dp = new Array(m).fill(0)
	for (let i = m - 1; i >= 0; i--) {
		let pre = 0;
		dp[i] = 1;
		for (let j = i + 1; j < m; j++) {
			// pre 保存的是"dp[i+1][j-1]"
			// 在修改dp[j]前保存它的值
			// 这个值就是下一轮内循环的"dp[i+1][j-1]"
			const temp = dp[j]
			if (s[i] === s[j]) {
				dp[j] = pre + 2;
			} else {
				dp[j] = Math.max(dp[j], dp[j - 1]);
			}
			pre = temp
		}
		// console.log(dp)
	}
	return dp[m - 1];
};

const case1 = "bbbab"
console.log(longestPalindromeSubseq(case1))
