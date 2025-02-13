/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	// 因为矩阵为 n*n 的方阵
	const size = matrix.length - 1
	let left = 0, right = size

	while (left < right) {
		for (let i = left; i < right; i++) {
			let top = left, bottom = right
			const temp = matrix[top][i]
			matrix[top][i] = matrix[size - i][left]
			matrix[size - i][left] = matrix[bottom][size - i]
			matrix[bottom][size - i] = matrix[i][right]
			matrix[i][right] = temp
		}
		left++
		right--
	}
};

const case1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]
const case2 = [
	[5, 1, 9, 11],
	[2, 4, 8, 10],
	[13, 3, 6, 7],
	[15, 14, 12, 16]
]
console.log(rotate(case2))
