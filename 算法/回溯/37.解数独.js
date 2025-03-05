/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
	/*
	// 使用set来保存已经出现的数
	const hash = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => new Set()))
	const rows = Array.from({ length: 9 }, () => new Set())
	const cols = Array.from({ length: 9 }, () => new Set())
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const cur = board[i][j]
			if (cur === '.') { continue }
			rows[i].add(cur)
			cols[j].add(cur)
			hash[floor(i / 3)][floor(j / 3)].add(cur)
		}
	}
	backtracking(0, 0)
	// return board

	function backtracking(row) {
		for (let i = row; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if (board[i][j] !== '.') { continue }
				for (let k = 1; k <= 9; k++) {
					k = k.toString()
					if (!canPlace(i, j, k)) { continue }
					board[i][j] = k
					hash[floor(i / 3)][floor(j / 3)].add(k)
					rows[i].add(k)
					cols[j].add(k)
					// 一直到最后所有数都填了，直接返回true
					if (backtracking(i)) { return true }
					board[i][j] = '.'
					hash[floor(i / 3)][floor(j / 3)].delete(k)
					rows[i].delete(k)
					cols[j].delete(k)
				}
				return false
			}
		}
		return true
	}
	function canPlace(i, j, k) {
		return !hash[floor(i / 3)][floor(j / 3)].has(k) &&
			!rows[i].has(k) &&
			!cols[j].has(k);
	}
	function floor(num) { return Math.floor(num) } 
	*/

	// 优化：
	// 使用数组记录是每个方格是否已经填写
	// 使用递归来遍历棋盘
	const rows = Array.from({ length: 9 }, () => Array(9).fill(false));
	const cols = Array.from({ length: 9 }, () => Array(9).fill(false));
	const boxes = Array.from({ length: 9 }, () => Array(9).fill(false));
	// 初始化已有的数字
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] !== '.') {
				const index = +board[i][j] - 1;
				rows[i][index] = true;
				cols[j][index] = true;
				boxes[getBoxIndex(i, j)][index] = true;
			}
		}
	}
	backtracking(0, 0);
	// return board

	function backtracking(row, col) {
		// 如果已经处理完所有行，返回 true
		if (row === 9) return true;
		// 如果当前列已经处理完，跳到下一行
		if (col === 9) return backtracking(row + 1, 0);
		// 如果当前位置已经有数字，跳到下一列
		if (board[row][col] !== '.') return backtracking(row, col + 1);
		for (let num = 0; num < 9; num++) {
			if (!rows[row][num] && !cols[col][num] && !boxes[getBoxIndex(row, col)][num]) {
				board[row][col] = (num + 1).toString();
				rows[row][num] = true;
				cols[col][num] = true;
				boxes[getBoxIndex(row, col)][num] = true;
				if (backtracking(row, col + 1)) return true;
				// 回溯
				board[row][col] = '.';
				rows[row][num] = false;
				cols[col][num] = false;
				boxes[getBoxIndex(row, col)][num] = false;
			}
		}
		return false;
	}
	function getBoxIndex(row, col) {
		return Math.floor(row / 3) * 3 + Math.floor(col / 3);
	}
};

const c = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
console.log(solveSudoku(c))
