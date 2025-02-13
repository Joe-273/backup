/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	// // dp[i][0]: 持有股票的最大利润
	// // dp[i][1]: 不持有股票且不在冷冻期的最大利润
	// // dp[i][2]: 不持有股票且在冷冻期的最大利润
	// const length = prices.length
	// const dp = Array.from({ length }, () => new Array(3))
	// // 初始化:
	// // dp[0][0] = -prices[0]，一开始持有股票的最大利润就是买入股票的花费，为负数
	// // dp[0][1] = 0，因为不在冷冻期，没有买股票
	// // dp[0][2] = 0，虽然第一天不存在冷冻期，因为不持有股票所以其最大利润就是0
	// dp[0][0] = -prices[0], dp[0][1] = 0, dp[0][2] = 0
	// // 遍历数组
	// for (let i = 1; i < length; i++) {
	// 	const pre = i - 1
	// 	// 持有股票的最大利润
	// 	// => max(之前就持有的股票的最大利润(之前买入)，不持有且不是冷冻期的最大利润-当前股票价格(当天买入))
	// 	dp[i][0] = Math.max(dp[pre][0], dp[pre][1] - prices[i])
	// 	// 不持有股票且不在冷冻期
	// 	// => max(在冷冻期不持有的最大利润,不在冷冻期且不持有的最大利润)
	// 	dp[i][1] = Math.max(dp[pre][1], dp[pre][2])
	// 	// 不持有股票且在冷冻期的最大利润
	// 	// => 也就是前一天卖出股票,即之前持有股票的最大利润+当前股票价格(当天卖出)
	// 	dp[i][2] = dp[pre][0] + prices[i]
	// }
	// // 打印
	// // console.log(dp)
	// return Math.max(dp[length - 1][1], dp[length - 1][2])

	// 状态压缩
	// 因为当天的状态仅仅依赖前一天的状态，所以使用三个变量代替dp数组
	const len = prices.length
	// hold: 持有股票
	// rest: 不持有股票且不在冷冻期
	// sell: 不持有股票且在冷冻期
	// 初始化
	let hold = -prices[0], rest = 0, sell = 0
	// 遍历
	for (let i = 1; i < len; i++) {
		// 完整状态转移：
		const newHold = Math.max(hold, rest - prices[i])
		const newRest = Math.max(rest, sell)
		const newSell = hold + prices[i]
		hold = newHold, rest = newRest, sell = newSell
	}
	return Math.max(rest, sell)
};

const case1 = [1, 2, 3, 0, 2]
console.log(maxProfit(case1))
