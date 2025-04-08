function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
	const m = obstacleGrid[0].length, n = obstacleGrid.length
	const dp: number[][] = Array.from({ length: n }, () => new Array(m).fill(0))
	// 初始化
	for (let i = 0; i < m && obstacleGrid[0][i] !== 1; i++) {
		dp[0][i] = 1
	}
	for (let i = 0; i < n && obstacleGrid[i][0] !== 1; i++) {
		dp[i][0] = 1
	}
	// 遍历
	for (let i = 1; i < n; i++) {
		for (let j = 1; j < m; j++) {
			if (obstacleGrid[i][j] === 1) { continue }
			dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
		}
	}
	return dp[n - 1][m - 1]
};


console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));

