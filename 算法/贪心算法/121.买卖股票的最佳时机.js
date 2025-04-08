/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	// 一次遍历
	let ans = 0, minPrice = prices[0]
	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < minPrice) {
			minPrice = prices[i]
			continue
		}
		ans = ans > prices[i] - minPrice ? ans : prices[i] - minPrice
	}
	return ans
};

const case1 = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(case1))
