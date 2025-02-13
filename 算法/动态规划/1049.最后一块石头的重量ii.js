/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
	// dp[i]的含义：
	// 容量为i的背包所能装下的最大价值为dp[i]
	const len = stones.length
	let sum = 0
	for (let i = 0; i < len; i++) {
		sum += stones[i]
	}
	// 尽可能拆分为两堆重量相同的石头
	// 届时两组相减方是最小值
	const half = Math.floor(sum / 2)
	// 所以原题可以转换为将石头尽可能装满容量为half的背包的问题
	// 初始化：dp[0]=0表示容量为0的背包所能装下的最大价值为0
	const dp = new Array(half + 1).fill(0)
	for (let j = 0; j < len; j++) {
		// 	i >= stones[j]: 背包容量要大于石头重量
		for (let i = half; i >= stones[j]; i--) {
			// 装和不装j时，容量为i的背包的最大价值，取最大值
			// 其中等式右边的部分:
			// dp[i - stones[j]]表示除去j的背包容量能装的最大价值
			// stones[j]表示石头j的价值
			dp[i] = Math.max(dp[i], dp[i - stones[j]] + stones[j])
		}
		// 打印
		// console.log(dp)
	}
	return sum - dp[half] - dp[half]
};

const case1 = [2, 7, 4, 1, 8, 1]
const case2 = [31, 26, 33, 21, 40]
console.log(lastStoneWeightII(case2))
