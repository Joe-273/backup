/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 直接扁平化处理矩阵，再进行二分查找
// var searchMatrix = function(matrix, target) {
// 	// 扁平化处理矩阵
// 	matrix = matrix.flat()
// 	let l = 0, r = matrix.length - 1, mid
// 	while (l <= r) {
// 		mid = Math.floor((l + r) / 2)
// 		const midNum = matrix[mid]
// 		if (midNum === target) {
// 			return true
// 		}
// 		if (midNum > target) {
// 			r = mid - 1
// 		} else if (midNum < target) {
// 			l = mid + 1
// 		}
// 	}
// 	return false
// };

// 不处理矩阵,直接二分查找
// var searchMatrix = function(matrix, target) {
// 	const rows = matrix.length, cols = matrix[0].length
// 	let l = 0, r = rows * cols - 1
// 	while (l <= r) {
// 		const mid = Math.floor((l + r) / 2)
// 		const row = Math.floor(mid / cols)
// 		const col = mid % cols
// 		console.log(row, col)
// 		const curNum = matrix[row][col]
//
// 		if (curNum === target) {
// 			return true
// 		}
// 		if (curNum > target) {
// 			r = mid - 1
// 		} else {
// 			l = mid + 1
// 		}
// 	}
// 	return false
// }

// 排除法二分查找
var searchMatrix = function(matrix, target) {
	const rows = matrix.length, cols = matrix[0].length
	let startRow = 0, startCol = cols - 1
	while (startRow < rows && startCol >= 0) {
		if (matrix[startRow][startCol] === target) {
			return true
		}
		if (matrix[startRow][startCol] < target) {
			startRow++
		} else {
			startCol--
		}
	}
	return false
}

const case1 = [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13]
const case2 = [[[1, 3]], 3]
console.log(searchMatrix(...case2))
