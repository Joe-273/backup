/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
	if (!grid || grid.length === 0) {
		return 0
	}
	// 队列用于实现广度优先搜索
	const rows = grid.length, cols = grid[0].length, queue = []
	let time = 0, fresh = 0

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			const cur = grid[row][col]
			if (cur === 1) {
				fresh++
			} else if (cur === 2) {
				// 将腐烂橘子的坐标加入队列
				queue.push([row, col])
			}
		}
	}

	const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
	while (fresh && queue.length) {
		// 「时间」只有橘子全部腐烂时，才会返回
		// 所以如果还有新鲜的橘子
		// 就可以假设新鲜橘子随机分布在腐烂橘子的四个方向上
		// 所以每轮循环都可以假设有橘子腐烂
		// 如果新鲜橘子不在腐烂橘子的四个方向上，那么永远返回-1
		time++
		const size = queue.length
		for (let i = 0; i < size; i++) {
			const [row, col] = queue.shift()

			for (let j = 0; j < dirs.length; j++) {
				const dx = dirs[j][0]
				const dy = dirs[j][1]

				// 让当前橘子的四个方向上的橘子腐烂
				const x = row + dx, y = col + dy
				if (x >= 0 && x < rows && y >= 0 && y < cols && grid[x][y] === 1) {
					queue.push([x, y])
					grid[x][y] = 2 // 腐烂
					fresh--
				}
			}
		}
	}
	return fresh === 0 ? time : -1
};
