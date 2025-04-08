function numTrees(n: number): number {
	const dp: number[] = new Array(n + 1).fill(0)
	// 初始化：dp[0]表示当由0个节点是，有一种二叉搜索树
	// dp[0] == 1, dp[1] == 1
	dp[0] = dp[1] = 1
	for (let i = 2; i <= n; i++) {
		// 递推公式
		// dp[i] == dp[0] * dp[i-1] + dp[1] * dp[i-1] + ... + dp[i-1] * dp[0]
		for (let j = 0; j < i; j++) {
			dp[i] += dp[j] * dp[i - j - 1]
		}
	}
	return dp[n]
};

console.log(numTrees(3));
