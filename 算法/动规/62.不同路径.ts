function uniquePaths(m: number, n: number): number {
	// 直接使用滚动数组
	const dp: number[] = new Array(n).fill(1)
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[j] = dp[j - 1] + dp[j]
		}
	}
	return dp[n - 1]
};

console.log(uniquePaths(3, 7));

