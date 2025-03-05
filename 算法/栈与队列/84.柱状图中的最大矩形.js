/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
	// 暴力解法 时间复杂度O(n^2)
	// let ans = 0
	// for (let i = 0; i < heights.length; i++) {
	// 	const base = heights[i]
	// 	let l = i, r = i
	// 	while (l >= 0 && heights[l] >= base) {
	// 		l--
	// 	}
	// 	while (r <= heights.length && heights[r] >= base) {
	// 		r++
	// 	}
	// 	ans = Math.max(ans, (r - l - 1) * base)
	// }
	// return ans

	// 单调栈
	if (heights.length <= 1) {
		return heights[0] ?? 0
	}
	let ans = 0
	const stack = [-1]
	for (let i = 0; i <= heights.length; i++) {
		const curHeight = heights[i] ?? 0
		while (stack.length > 1 && curHeight < heights[stack[stack.length - 1]]) {
			const h = heights[stack.pop()], w = i - stack[stack.length - 1] - 1
			ans = Math.max(ans, h * w)
		}
		stack.push(i)
	}
	return ans
};

const case1 = [2, 1, 5, 6, 2, 3]
const case2 = [2, 4]
console.log(largestRectangleArea(case2))
