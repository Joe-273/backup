/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
	const len = prices.length
	if (len === 0) {
		return 0
	}
	// 跟买卖股票ii很类似
	let hold = -prices[0], noHold = 0
	for (let i = 1; i < len; i++) {
		const curPrice = prices[i]
		const newHold = Math.max(hold, noHold - curPrice)
		const newNoHold = Math.max(noHold, hold + curPrice - fee)
		hold = newHold, noHold = newNoHold
	}
	return noHold
};
