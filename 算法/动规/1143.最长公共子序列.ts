function longestCommonSubsequence(text1: string, text2: string): number {
	// const m = text1.length, n = text2.length
	// const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
	// let ans = 0
	// for (let i = 1; i <= m; i++) {
	// 	for (let j = 1; j <= n; j++) {
	// 		if (text1[i - 1] === text2[j - 1]) {
	// 			dp[i][j] = dp[i - 1][j - 1] + 1
	// 		} else {
	// 			dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
	// 		}
	// 		ans = Math.max(dp[i][j], ans)
	// 	}
	// }
	// return ans

	// 状态压缩
	const m = text1.length, n = text2.length
	const dp: number[] = new Array(n + 1).fill(0)
	let ans = 0
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
			ans = Math.max(dp[j], ans)
		}
	}
	return ans
};

console.log(longestCommonSubsequence("bsbininm", "jmjkbkjkv"));

