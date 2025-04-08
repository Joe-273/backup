function integerBreak(n: number): number {
	const dp: number[] = new Array(n + 1).fill(0)
	// 初始化：dp[0] == dp[1] == 0，dp[2] == 1
	dp[2] = 1
	for (let i = 3; i <= n; i++) {
		// 可以拆分为：j * (i - j) 和 j * dp[i - j]，第一个是拆分为两个数，第二个是拆分为多个数
		for (let j = 1; j <= i - j; j++) {
			dp[i] = Math.max(j * (i - j), j * dp[i - j], dp[i])
		}
		// 也可以使用j * (i - j), (i - j) * dp[j]，主要是让dp[x]中的x尽量大，这样拆分的积会大一些
		// for (let j = i - 1; j >= i - j; j--) {
		// 	dp[i] = Math.max(j * (i - j), (i - j) * dp[j], dp[i])
		// }
	}
	return dp[n]
};

console.log(integerBreak(10));

