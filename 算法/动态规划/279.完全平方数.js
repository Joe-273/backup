/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
	// dp[i]表示装满容量为i的背包最少需要dp[i]个物品
	// 物品和物品容量为j的平方数
	//
	//        不选择物品   选择物品(dp[i - j^2] + 当前物品数)
	//              ↑         ↑
	// dp[i] = min(dp[i], dp[i - j^2] + 1)
	//
	// 初始化：dp[0]=0，装满容量为0的背包需要0个物品
	const dp = new Array(n + 1).fill(Infinity)
	dp[0] = 0
	// 遍历：
	// 因为求的是组合的数量，所以不管是遍历排列还是遍历组合都可以
	// 也就是先遍历背包或者先遍历物品都可以
	// 这里选择遍历物品
	// 题目的n最小为1，也就是物品从1开始遍历
	for (let j = 1, s = j * j; s <= n; j++, s = j * j) {
		for (let i = s; i <= n; i++) {
			dp[i] = Math.min(dp[i], dp[i - s] + 1)
		}
		// 打印
		// console.log(dp)
	}
	return dp[n]
};

const case1 = 12
const case2 = 1
console.log(numSquares(case2))
