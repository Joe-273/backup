/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function(matrix, target) {
// 	const rowLen = matrix.length
// 	const colLen = matrix[0].length
// 	// 如果左上角元素大于目标值 或者 右下角元素小于目标值
// 	// 则没有这个元素
// 	if (matrix[0][0] > target || matrix[rowLen - 1][colLen - 1] < target) {
// 		return false
// 	}
// 	let row = 0
// 	while (row < rowLen) {
// 		// 判断当前行的首或尾跟target相等的情况
// 		if (matrix[row][0] === target || matrix[row][colLen - 1] === target) {
// 			return true
// 		}
// 		// 如果当前行的最后一个值大于target
// 		// 说明target可能存在当前行
// 		if (matrix[row][colLen - 1] > target) {
// 			// 二分查找
// 			let l = 0, r = colLen - 1
// 			while (l < r) {
// 				const mid = Math.floor((l + r) / 2)
// 				const midValue = matrix[row][mid]
// 				if (midValue === target) {
// 					return true
// 				} else if (midValue > target) {
// 					r = mid - 1
// 				} else {
// 					l = mid + 1
// 				}
// 			}
// 			if (matrix[row][r] === target) {
// 				return true
// 			}
// 		}
// 		row++
// 	}
// 	return false
// };

var searchMatrix = function(matrix, target) {
	let row = 0, col = matrix[0].length - 1
	// 如果左上角元素大于目标值 或者 右下角元素小于目标值
	// 则没有这个元素
	if (matrix[0][0] > target || matrix[matrix.length - 1][col] < target) {
		return false
	}
	while (row < matrix.length && col >= 0) {
		if (matrix[row][col] === target) {
			return true
		} else if (matrix[row][col] < target) {
			// 当前行再往左边移动也都是比target小的
			// 直接跳到下一行
			row++
		} else {
			// 当前行向左遍历
			col--
		}
	}
	return false
}

const case1 = [
	[
		[1, 4, 7, 11, 15],
		[2, 5, 8, 12, 19],
		[3, 6, 9, 16, 22],
		[10, 13, 14, 17, 24],
		[18, 21, 23, 26, 30]
	],
	5
]
console.log(searchMatrix(...case1))
