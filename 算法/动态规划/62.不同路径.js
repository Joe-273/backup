/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
	// // dp 表示的是走到i，j位置有多少种走法(路径)
	// // dp[i][j] = dp[i-1][j] + dp[i][j-1]
	// const dp = new Array(m).fill().map(() => new Array(n))
	//
	// // 初始化
	// // 题目说每次只能向右或者向下走
	// // 所以从0，0的位置到0，j的任何位置，都只有一种路径
	// // 从0，0的位置到i，0的任何位置，都只有一种路径
	// for (let i = 0; i < m; i++) { dp[i][0] = 1 }
	// for (let j = 0; j < n; j++) { dp[0][j] = 1 }
	// // 遍历
	// // 因为每一个位置的状态都依赖当前位置上方的状态和左方的状态
	// // 所以遍历顺序只能够从上到下，从左到右遍历
	// for (let i = 1; i < m; i++) {
	// 	for (let j = 1; j < n; j++) {
	// 		dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
	// 	}
	// }
	// // 打印
	// // console.log(dp)
	// return dp[m - 1][n - 1]

	// 精简代码
	// 初始化
	// 保证dp[0][j] = dp[i][0] = 1即可，其他的位置遍历的时候再覆盖
	const dp = new Array(m).fill().map(() => new Array(n).fill(1))
	// 遍历
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
		}
	}
	return dp[m - 1][n - 1]
};

const case1 = [3, 7]
console.log(uniquePaths(...case1))
