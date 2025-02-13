/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
	// 每一行皇后可能出现的情况
	const rows = []
	for (let col = 0; col < n; col++) {
		rows.push('.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1));
	}
	// 记录行，45度方向，135度方向是否有皇后
	const cols = new Set(), diag45 = new Set(), diag135 = new Set()
	const ans = []

	backTracking([], 0)
	return ans

	function backTracking(path, startRow) {
		// 如果递归能到最后一行
		// 说明这是一个合法的放置位置
		if (startRow === n) {
			ans.push(path.slice())
			return
		}

		for (let col = 0; col < n; col++) {
			if (cols.has(col) || diag45.has(startRow - col) || diag135.has(startRow + col)) {
				continue
			}
			path.push(rows[col]);
			cols.add(col) // 表示当前col有皇后
			diag45.add(startRow - col) // 表示当前位置的45度对角线有皇后
			diag135.add(startRow + col) // 表示当前位置的135度对角线有皇后
			// 递归
			backTracking(path, startRow + 1)
			// 回溯
			path.pop()
			cols.delete(col)
			diag45.delete(startRow - col)
			diag135.delete(startRow + col)
		}
	}
};

console.log(solveNQueens(4))
