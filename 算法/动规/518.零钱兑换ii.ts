function change(amount: number, coins: number[]): number {
	// dp[i]表示容量为i的背包有dp[i]种方式能够装满
	const dp: number[] = new Array(amount + 1).fill(0)
	dp[0] = 1
	for (let i = 0; i < coins.length; i++) {
		const cur = +coins[i]
		for (let j = cur; j <= amount; j++) {
			dp[j] += dp[j - cur]
		}
	}
	return dp[amount]
};

console.log(change(5, [1, 2, 5]));

