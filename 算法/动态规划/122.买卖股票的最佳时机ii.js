/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	// // dp[i][0]含义：第i天不持有股票的最大利润
	// // dp[i][1]含义：第i天持有股票的最大利润
	// // 因为股票是可以多次购入和卖出
	// //
	// //                之前就没买或者卖过了     之前就买了，今天卖掉
	// //                     ↑                       ↑
	// // dp[i][0] = max(前一天不持有的最大利润，前一天持有的最大利润+今天卖出的价格)
	// //
	// //                之前就买了             之前就卖过了，或者之前没买过，今天买下
	// //                     ↑                       ↑
	// // dp[i][1] = max(前一天持有的最大利润，前一天不持有的最大利润-今天买入的价格)
	// // =>
	// // 		dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
	// // 		dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
	// const length = prices.length, dp = Array.from({ length }, () => new Array(2))
	// // 初始化：dp[0][0] 第一天没买的利润为0，dp[0][1] 第一天买入的利润为负的第一天的价格
	// dp[0][0] = 0, dp[0][1] = -prices[0]
	// // 遍历顺序：因为dp[i]依赖dp[i - 1]的数据，所以从前往后遍历
	// for (let i = 1; i < length; i++) {
	// 	dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
	// 	dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
	// }
	// // 打印
	// // console.log(dp)
	// return dp[length - 1][0]

	// 状态压缩
	const len = prices.length
	if (len === 0) {
		return 0
	}
	// 初始化，使用两个变量压缩dp数组状态
	let hold = -prices[0], noHold = 0
	for (let i = 1; i < len; i++) {
		const curPrice = prices[i]
		// 完整的状态转移：
		const newNoHold = Math.max(noHold, hold + curPrice)
		const newHold = Math.max(hold, noHold - curPrice)
		noHold = newNoHold
		hold = newHold
	}
	return noHold
};

const case1 = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(case1))
