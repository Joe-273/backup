/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	// 贪心算法
	let minPrice = prices[0], ans = 0
	for (let i = 1; i < prices.length; i++) {
		const curPrice = prices[i]
		ans = Math.max(ans, curPrice - minPrice)
		minPrice = Math.min(minPrice, curPrice)
	}
	return ans
};

const case1 = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(case1))
