/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	const rows = grid.length, cols = grid[0].length
	let ans = 0
	// 遍历网格
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			if (grid[row][col] === '1') {
				// 岛屿数量加一
				ans++
				// 找到了岛屿：
				// 将相连区域全部变成'0'（只要不是'1'就行）
				dfs(row, col)
			}
		}
	}
	return ans

	function dfs(row, col) {
		if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] !== '1') {
			return
		}
		// 将当前位置变为'0'
		grid[row][col] = '0'
		// 递归四个方向
		dfs(row, col + 1)
		dfs(row, col - 1)
		dfs(row + 1, col)
		dfs(row - 1, col)
	}
};
