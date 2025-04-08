/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	// 贪心，贪每天的正利润
	let ans = 0
	for (let i = 0; i < prices.length - 1; i++) {
		const profit = prices[i + 1] - prices[i]
		ans += profit > 0 ? profit : 0
	}
	return ans
};
