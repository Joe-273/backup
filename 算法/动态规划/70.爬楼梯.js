/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	// 1. 迭代法
	let pre1 = 1, pre2 = 2
	if (n === 1) {
		return pre1
	}
	if (n === 2) {
		return pre2
	}
	let ans = 0
	for (let i = 3; i <= n; i++) {
		ans = pre1 + pre2
		pre1 = pre2
		pre2 = ans
	}
	return ans

	// 2. 递归法	
	// const dp = new Array(n - 1)
	// dp[0] = 1
	// dp[1] = 2
	// return dfs(n - 1)
	// function dfs(n) {
	// 	if (dp[n]) {
	// 		return dp[n]
	// 	}
	// 	dp[n] = dfs(n - 1) + dfs(n - 2)
	// 	return dp[n]
	// }
};

const case1 = 4
console.log(climbStairs(case1))
