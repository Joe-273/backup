/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
	//	dp[i]数组含义：装满一个容量为i的背包一共有dp[i]种方法
	// 比如当前物品重量和价值都为1，那么能够凑成容量为5的方法有dp[5-1]种
	// 当前物品重量和价值都为2，那么能够凑成容量为5的方法有dp[5-2]种
	// 当前物品重量和价值都为3，那么能够凑成容量为5的方法有dp[5-2]种
	// ...
	// 所以可以推出dp[5] += dp[5-coins[j]]
	// => dp[i] += dp[i-coins[j]]
	const dp = new Array(amount + 1).fill(0)
	// 初始化：dp[0]=1,因为dp[i]是有dp[i-j]累加而来，所以dp[0]初始化为1
	dp[0] = 1
	// 打印组合
	// combinations[i] 保存所有凑成金额 i 的组合
	// const combinations = new Array(amount + 1).fill(null).map(() => []);
	// combinations[0] = [[]]; // 初始化：凑成金额 0 的组合为空组合

	// 先遍历物品再遍历背包
	// 因为所求的是组合数而不是排列数
	for (let j = 0; j < coins.length; j++) {
		const coin = coins[j]
		for (let i = coin; i <= amount; i++) {
			dp[i] += dp[i - coin]

			// 更新组合数组
			// if (combinations[i - coin].length > 0) {
			// 	for (const combination of combinations[i - coin]) {
			// 		combinations[i].push([...combination, coin]);
			// 	}
			// }
		}
		// 打印
		// console.log(dp)
		// console.log(combinations)
	}
	return dp[amount]
};

const case1 = [5, [1, 2, 5]]
console.log(change(...case1))
