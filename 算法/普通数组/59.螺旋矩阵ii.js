/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
	const ans = Array.from({ length: n }, () => new Array(n))
	let top = 0, bot = n - 1, left = 0, right = n - 1, cur = 1
	while (cur <= n * n) {
		// 上左-->上右
		for (let i = left; i <= right; i++) {
			ans[top][i] = cur++
		}
		top++
		//上右-->下右
		for (let i = top; i <= bot; i++) {
			ans[i][right] = cur++
		}
		right--
		// 下右-->下左
		for (let i = right; i >= left; i--) {
			ans[bot][i] = cur++
		}
		bot--
		// 下左-->上左
		for (let i = bot; i >= top; i--) {
			ans[i][left] = cur++
		}
		left++
	}

	return ans
};

const case1 = 3
console.log(generateMatrix(case1))
