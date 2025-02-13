/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
	// const m = grid.length, n = grid[0].length
	// // dp[i][j]表示[i,j]下标的最小前缀和
	// const dp = Array.from({ length: m }, () => new Array(n))
	// // 初始化
	// // dp[i][0]和dp[0][j]表示前缀和
	// dp[0][0] = grid[0][0]
	// for (let i = 1; i < m; i++) { dp[i][0] = dp[i - 1][0] + grid[i][0] }
	// for (let j = 1; j < n; j++) { dp[0][j] = dp[0][j - 1] + grid[0][j] }
	// // 遍历
	// // dp[i][j]由dp[i-1][j]或dp[i][j-1]推导而来
	// // 所以从上到下，从左到右遍历
	// for (let i = 1; i < m; i++) {
	// 	for (let j = 1; j < n; j++) {
	// 		dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
	// 	}
	// 	// console.log(dp)
	// }
	// return dp[m - 1][n - 1]

	// 使用原地算法
	const m = grid.length, n = grid[0].length
	for (let i = 1; i < m; i++) { grid[i][0] = grid[i - 1][0] + grid[i][0] }
	for (let j = 1; j < n; j++) { grid[0][j] = grid[0][j - 1] + grid[0][j] }
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
		}
	}
	return grid[m - 1][n - 1]
};

const case1 = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
console.log(minPathSum(case1))
