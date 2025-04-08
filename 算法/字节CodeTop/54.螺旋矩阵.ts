function spiralOrder(matrix: number[][]): number[] {
	const m = matrix.length, n = matrix[0].length
	const ans: number[] = []
	let top = 0, bot = m - 1, left = 0, right = n - 1
	while (true) {
		for (let l = left; l <= right; l++) {
			ans.push(matrix[top][l])
		}
		top++
		if (top > bot) { break }
		for (let t = top; t <= bot; t++) {
			ans.push(matrix[t][right])
		}
		right--
		if (left > right) { break }
		for (let r = right; r >= left; r--) {
			ans.push(matrix[bot][r])
		}
		bot--
		if (top > bot) { break }
		for (let b = bot; b >= top; b--) {
			ans.push(matrix[b][left])
		}
		left++
		if (left > right) { break }
	}
	return ans
};

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));

