/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
	const m = obstacleGrid.length, n = obstacleGrid[0].length
	// 与62题不同路径一样，dp表示的是i，j位置有多少种走法
	const dp = Array.from({ length: m }, () => new Array(n).fill(0));
	// 因为题目说有障碍不能走
	// 所以初始化的时候要遇到障碍后的位置走法为0，也就是不能走
	for (let i = 0; i < m; i++) {
		if (obstacleGrid[i][0] === 0) {
			dp[i][0] = 1
		} else break
	}
	for (let j = 0; j < n; j++) {
		if (obstacleGrid[0][j] === 0) {
			dp[0][j] = 1
		} else break
	}
	// 遍历
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			// 如果当前位置是障碍，那么到当前位置没有任何路径
			// 所以当前的位置必须没有障碍才记录可走路径数量
			if (obstacleGrid[i][j] === 0) {
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
			}
		}
	}
	// 打印
	// console.log(dp)
	return dp[m - 1][n - 1]
};

const case1 = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
console.log(uniquePathsWithObstacles(case1))
