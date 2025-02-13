/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
	const rows = board.length, cols = board[0].length, wLen = word.length
	const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
	// 将字符串转换为数组
	word = word.split('')

	// 提前剪枝：
	// 统计网格中的字母数
	const count = {};
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			const letter = board[i][j];
			count[letter] = (count[letter] ?? 0) + 1
		}
	}
	// 统计word中的字母数
	const wordCount = {};
	for (let i = 0; i < wLen; i++) {
		const letter = word[i]
		wordCount[letter] = (wordCount[letter] ?? 0) + 1;
		// word中出现的某个字母数多于网格中相应字母数
		if (wordCount[letter] > count[letter] ?? 0) {
			return false
		}
	}
	// 翻转word，尽快触发剪枝
	if ((count[word[wLen - 1]] ?? 0) < (count[word[0]] ?? 0)) {
		word = word.reverse()
	}

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (backTracking(i, j, 0)) {
				return true
			}
		}
	}
	return false

	function backTracking(x, y, startIndex) {
		if (
			x < 0
			|| x >= rows
			|| y < 0
			|| y >= cols
			|| board[x][y] !== word[startIndex]
		) {
			return false
		}
		// 当前字母正确（board[x][y] === word[startIndex]）

		if (startIndex === wLen - 1) {
			return true
		}

		const curLetter = board[x][y]
		board[x][y] = 0 // 设置为0 表示已访问过
		// 递归
		for (let i = 0; i < dirs.length; i++) {
			const dx = x + dirs[i][0]
			const dy = y + dirs[i][1]
			if (backTracking(dx, dy, startIndex + 1)) {
				return true
			}
		}
		// 回溯
		board[x][y] = curLetter

		return false
	}
};

const case1 = [
	[["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
	"ABCCED"
]
console.log(exist(...case1))

