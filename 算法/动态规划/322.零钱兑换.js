/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
	// dp[i]的含义：装满容量为i的背包最少需要dp[i]枚硬币
	//
	//                不放入背包  放入背包(dp[i - coins[j]]枚+当前硬币)
	//                   ↑           ↑
	// dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
	// 
	// 初始化：题目已经给出当容量为0时至少需要0枚硬币
	// 所以dp[0]=0，为了递推公式中比较最小值，所以其他值初始化为最大
	const dp = new Array(amount + 1).fill(Infinity)
	dp[0] = 0
	// 遍历：
	// 因为不论先遍历物品还是先遍历背包，不论是获得排列数还是组合数
	// 每一个组合或者排列所需要的硬币数量都是固定的，所以先遍历物品或者背包都可以
	// 这里先遍历物品
	for (const coin of coins) {
		// 因为是完全背包问题，所以正序遍历背包
		for (let i = coin; i <= amount; i++) {
			dp[i] = Math.min(dp[i], dp[i - coin] + 1)
		}
		// 打印
		// console.log(dp)
	}
	return dp[amount] === Infinity ? -1 : dp[amount]
};

const case1 = [[1, 2, 5], 11]
console.log(coinChange(...case1))
