/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
	/*
	 diag135度，每一条135度对角线的i-j的值是相等的
		[0, -1, -2, -3, -4]
		[1,  0, -1, -2, -3]
		[2,  1,  0, -1, -2]
		[3,  2,  1,  0, -1]
		[4,  3,  2,  1,  0]

	 diag45度，每一条45度对角线的i+j的值是相等的
		[0, 1, 2, 3, 4]
		[1, 2, 3, 4, 5]
		[2, 3, 4, 5, 6]
		[3, 4, 5, 6, 7]
		[4, 5, 6, 7, 8]

	 所以可以用一个数字来表示一条对角线
	*/

	const ans = [], cols = new Set(), diag45 = new Set(), diag135 = new Set()
	// 每一行的皇后的位置的集合
	const rows = []
	for (let i = 0; i < n; i++) { rows.push('.'.repeat(i) + 'Q' + '.'.repeat(n - 1 - i)) }
	backtracking(0, [])
	return ans

	function backtracking(start, path) {
		if (start === n) { ans.push(Array.from(path)) }
		for (let i = 0; i < n; i++) {
			if (!canPlace(i, start)) { continue }
			path.push(rows[i])
			cols.add(i)
			diag45.add(i + start)
			diag135.add(i - start)
			// 递归
			backtracking(start + 1, path)
			// 回溯
			path.pop()
			cols.delete(i)
			diag45.delete(i + start)
			diag135.delete(i - start)
		}
	}
	function canPlace(i, j) {
		return !cols.has(i) && !diag45.has(i + j) && !diag135.has(i - j)
	}
};

console.log(solveNQueens(4))
