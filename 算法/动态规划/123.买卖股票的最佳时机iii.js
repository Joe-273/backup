/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	// // 以下的第1次第2次指的是第一笔买卖和第二笔买卖
	// // dp[i][0]含义：第1次持有时的最大利润
	// // dp[i][1]含义：第1次不持有时的最大利润
	// // dp[i][2]含义：第2次持有时的最大利润
	// // dp[i][3]含义：第2次不持有时的最大利润
	// const length = prices.length, dp = Array.from({ length }, () => new Array(4))
	// // 初始化dp
	// // dp[0][0] = -prices[0]，也就是第一天如果买入的利润
	// // dp[0][1] = 0，也就是第一天没有买入的利润
	// // 以下可以想象为第一天买了又卖了，从而完成第一次买卖股票
	// // 然后又买又卖，完成第二次股票买卖
	// // dp[0][2] = -prices[0]，也就是第一天如果买入的利润
	// // dp[0][3] = 0，也就是第一天没有买入的利润
	// dp[0][0] = -prices[0], dp[0][1] = 0
	// dp[0][2] = -prices[0], dp[0][3] = 0
	// // 递推公式 =>
	// // dp[i][0] = max(之前已经持有的最大股票利润, 第一次购入股票的利润，即负的购入股票的价格)
	// // dp[i][1] = max(之前就卖出得到的最大股票利润, 今天卖出的股票利润，即之前持有的利润+今天股票价格)
	// // dp[i][2] = max(之前第二次持有的股票最大利润, 第一次购入股票的利润，第一次卖掉股票的利润-第二次购买股票的价格)
	// // dp[i][3] = max(之前第二次卖出股票的最大利润, 今天卖出出的股票利润，即第二次买入持有的利润+今天股票价格)
	// // 遍历：因为dp[i]依赖dp[i-1]的数据，所以从后往前遍历
	// for (let i = 1; i < length; i++) {
	// 	const pre = i - 1
	// 	dp[i][0] = Math.max(dp[pre][0], -prices[i])
	// 	dp[i][1] = Math.max(dp[pre][1], dp[pre][0] + prices[i])
	// 	dp[i][2] = Math.max(dp[pre][2], dp[pre][1] - prices[i])
	// 	dp[i][3] = Math.max(dp[pre][3], dp[pre][2] + prices[i])
	// }
	// // 打印
	// // console.log(dp)
	// return dp[length - 1][3]

	// 状态压缩
	const len = prices.length
	// 初始化，使用四个变量来代替dp储存4个状态
	let hold1 = -prices[0], hold2 = -prices[0]
	let noHold1 = 0, noHold2 = 0
	for (let i = 0; i < len; i++) {
		// 完整的状态转移：
		const newHold1 = Math.max(hold1, -prices[i])
		const newNoHold1 = Math.max(noHold1, hold1 + prices[i])
		const newHold2 = Math.max(hold2, noHold1 - prices[i])
		const newNoHold2 = Math.max(noHold2, hold2 + prices[i])
		hold1 = newHold1
		noHold1 = newNoHold1
		hold2 = newHold2
		noHold2 = newNoHold2
	}
	return noHold2
};

const case1 = [3, 3, 5, 0, 0, 3, 1, 4]
console.log(maxProfit(case1))
