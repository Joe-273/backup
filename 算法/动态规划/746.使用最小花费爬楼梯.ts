function minCostClimbingStairs(cost: number[]): number {
	// const len = cost.length
	// const dp: number[] = new Array(len + 1).fill(0)
	// // 因为可以选择从0或者1开始走
	// dp[0] = dp[1] = 0
	// for (let i = 2; i <= len; i++) {
	// 	// 选择从前一层跳一层到当前层
	// 	// 或者从前两层跳两层到当前层
	// 	dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
	// }
	// return dp[len]

	// 因为dp[i]仅跟dp[i-1]和dp[i-2]的状态有关，可以用一个变量替代dp数组
	let pre1 = 0, pre2 = 0 // 到达第一层和第二层的花销
	for (let i = 2; i <= cost.length; i++) {
		const temp = pre2
		pre2 = Math.min(pre2 + cost[i - 1], pre1 + cost[i - 2])
		pre1 = temp
	}
	return pre2
};

const case1 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
console.log(minCostClimbingStairs(case1))
