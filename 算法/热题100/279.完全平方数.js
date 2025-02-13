/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
	// dp[i]: 最少dp[i]个完全平凡数可以组成i
	const dp = new Array(n + 1).fill(Infinity)
	dp[0] = 0
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j * j <= i; j++) {
			dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
		}
		// console.log(dp)
	}
	return dp[n]
};

const case1 = 12
const case2 = 4
console.log(numSquares(case1))
