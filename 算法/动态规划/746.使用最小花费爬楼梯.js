/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
	// dp数组记录的是到达每个下标位置所需要的最小花费
	// 所以dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
	const len = cost.length
	// 并不是达到len-1的下标就是达到顶楼
	// 而是到了len下标后才达到顶楼
	// 到了len+1的位置就是到了楼顶的位置
	const dp = new Array(len + 1)
	// 因为可以选择从0或者1开始跳
	// 所以到达0或者1位置的花费为0
	dp[0] = dp[1] = 0
	for (let i = 2; i < len + 1; i++) {
		dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
	}
	return dp[len]
};

const case1 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
console.log(minCostClimbingStairs(case1))
