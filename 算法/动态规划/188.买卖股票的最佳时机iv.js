/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
	// // 题目要求至多能买卖k次股票
	// // 所以买入卖出共有2k次
	// // dp含义 / 递推公式：
	// // 定义从1开始，奇数为持有股票的状态，偶数为不持有股票的状态
	// // dp[i][0]=dp[i-1][0] -> 未进行任何股票操作
	// // dp[i][1]=max(dp[i-1][1], dp[i-1][0]-prices[i]) -> 第一次持有股票的最大利润
	// // dp[i][2]=max(dp[i-1][2], dp[i-1][1]+prices[i]) -> 第一次不持有股票的最大利润
	// // ...
	// // dp[i][2k-1]=max(dp[i-1][2k-1], dp[i-1][2k-2]-prices[i]) -> 第k次持有股票的最大利润
	// // dp[i][2k]=max(dp[i-1][2k], dp[i-1][2k-1]+prices[i])   -> 第k次不持有股票的最大利润
	// const length = prices.length, stateLen = 2 * k + 1
	// const dp = Array.from({ length }, () => new Array(stateLen))
	// // 初始化: 没有进行任何操作时，股票的最大利润为0
	// // dp[0][0] = 0
	// // dp[0][1] = -prices[i]
	// // dp[0][2] = 0
	// // ...
	// // dp[0][2k-1] = -prices[i]
	// // dp[0][2k] = 0
	// dp[0][0] = 0 // 未操作时
	// for (let j = 1; j < stateLen; j += 2) {
	// 	dp[0][j] = -prices[0]
	// 	dp[0][j + 1] = 0
	// }
	// // 遍历，因为dp[i]依赖于dp[i-1]，所以从前往后遍历
	// for (let i = 1; i < length; i++) {
	// 	const pre = i - 1
	// 	dp[i][0] = dp[pre][0]
	// 	for (let j = 1; j < stateLen; j += 2) {
	// 		dp[i][j] = Math.max(dp[pre][j], dp[pre][j - 1] - prices[i])
	// 		dp[i][j + 1] = Math.max(dp[pre][j + 1], dp[pre][j] + prices[i])
	// 	}
	// 	// 打印
	// 	// console.log(dp)
	// }
	// return dp[length - 1][stateLen - 1]

	// 状态压缩，因为dp[i]仅依赖前一天的数据
	// 所以可以把二维数组压缩成一维数组
	const stateLen = k * 2 + 1
	const dp = new Array(stateLen).fill(0)
	// 初始化
	for (let j = 1; j < stateLen; j += 2) {
		dp[j] = -prices[0]
	}
	// 遍历
	for (let i = 1; i < prices.length; i++) {
		for (let j = 1; j < stateLen; j += 2) {
			dp[j] = Math.max(dp[j], dp[j - 1] - prices[i])
			dp[j + 1] = Math.max(dp[j + 1], dp[j] + prices[i])
		}
		// 打印
		// console.log(dp)
	}
	return dp[stateLen - 1]
};

const case1 = [2, [3, 3, 5, 0, 0, 3, 1, 4]]
console.log(maxProfit(...case1))
