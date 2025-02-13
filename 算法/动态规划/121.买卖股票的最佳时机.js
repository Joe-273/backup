/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	// 动态规划
	// dp[i][0]含义：第i天不持有股票的最大利润
	// dp[i][1]含义：第i天持有股票的最大利润
	// 需要明确的是，没买入股票时利润为0，买入股票时利润为(负的买入的股票价格)
	//
	//  不持有说明之前已经卖了:         持有说明之前还没有卖:
	//  取之前时间卖掉获得的最大利润    之前最大的利润+今天卖出的价格=今天不持有股票的利润
	//                    ↑                                      ↑
	// dp[i][0] = max(前一天不持有股票的最大利润, 前一天持有股票的最大利润+当前股票的价格)
	//
	//  持有说明之前就已经买了:         说明之前没买:
	//  取之前时间没卖时候的最大利润    利润就是买入的价格的负数
	//                    ↑                              ↑
	// dp[i][1] = max(前一天持有股票的最大利润, -当前股票的价格)
	// =>
	// 		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
	// 		dp[i][1] = Math.max(dp[i - 1][1], - prices[i])
	//
	const length = prices.length, dp = Array.from({ length }, () => new Array(2))
	// 初始化：
	// dp[0][0]=0：第一天没买股票（不持有）利润为0
	// dp[0][1]=-prices[0]：一开始持有股票时候的利润就是 -购入股票的价格
	dp[0][0] = 0, dp[0][1] = - prices[0]
	// 遍历顺序：因为dp[i]依赖于dp[i-1]的数据
	// 所以是从前往后遍历
	for (let i = 1; i < length; i++) {
		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
		dp[i][1] = Math.max(dp[i - 1][1], - prices[i])
	}
	// 打印
	// console.log(dp)
	return dp[length - 1][0]
};

const case1 = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(case1))
