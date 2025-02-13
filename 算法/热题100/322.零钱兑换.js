/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
	// dp[j]：获取j的金额需要j枚金币
	const dp = new Array(amount + 1).fill(Infinity)
	dp[0] = 0
	const m = coins.length

	// // 先遍历物品
	// for (let i = 1; i <= m; i++) {
	// 	// 遍历背包
	// 	for (let j = coins[i]; j <= amount; j++) {
	// 		dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
	// 	}
	// 	console.log(dp)
	// }

	// 先遍历背包
	for (let j = 1; j <= amount; j++) {
		// 物品
		for (let i = 1; i < m; i++) {
			if (j >= coins[i]) {
				dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
			}
		}
		console.log(dp)
	}


	return dp[amount]
};

const case1 = [[1, 2, 5], 11]
console.log(coinChange(...case1))
