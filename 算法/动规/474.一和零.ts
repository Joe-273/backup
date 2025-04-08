function findMaxForm(strs: string[], m: number, n: number): number {
	// dp[i][j]表示容量为i个0,j个1的的背包最多能装下多少个物品
	const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
	for (let k = 0; k < strs.length; k++) {
		let x = 0, y = 0
		for (const char of strs[k]) { char === '0' ? x++ : y++ }
		// 背包倒叙遍历，停止条件为物品的大小要小于背包容量
		// 二维滚动数组
		for (let i = m; i >= x; i--) {
			for (let j = n; j >= y; j--) {
				dp[i][j] = Math.max(dp[i - x][j - y] + 1, dp[i][j])
			}
		}
	}
	return dp[m][n]
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));

