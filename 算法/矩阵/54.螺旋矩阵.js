/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
	let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1

	const ans = []
	while (true) {
		// 左到右
		for (let i = left; i <= right; i++) {
			ans.push(matrix[top][i])
		}
		top++

		if (top > bottom) {
			break
		}

		// 上到下
		for (let i = top; i <= bottom; i++) {
			ans.push(matrix[i][right])
		}
		right--

		if (left > right) {
			break
		}

		// 右到左
		for (let i = right; i >= left; i--) {
			ans.push(matrix[bottom][i])
		}
		bottom--

		if (top > bottom) {
			break
		}

		// 下到上
		for (let i = bottom; i >= top; i--) {
			ans.push(matrix[i][left])
		}
		left++

		if (left > right) {
			break
		}
	}
	return ans
};

const case1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
]
console.log(spiralOrder(case1))
