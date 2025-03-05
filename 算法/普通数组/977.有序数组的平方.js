/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
	const n = nums.length
	const ans = new Array(n)
	let l = 0, r = n - 1, cur = n - 1
	while (l <= r) {
		const lPow = nums[l] ** 2
		const rPow = nums[r] ** 2
		if (lPow < rPow) {
			ans[cur--] = rPow
			r--
		} else {
			ans[cur--] = lPow
			l++
		}
	}
	return ans
};

const case1 = [-4, -1, 0, 3, 10]
console.log(sortedSquares(case1))
