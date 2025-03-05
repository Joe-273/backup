/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
	// 只有0，1，2，思路可以是把0都放1左边，把2都放1右边

	// 两次遍历解法
	// const n = nums.length
	// let l = 0, r = n - 1
	// // 处理0
	// for (let i = 0; i < n; i++) {
	// 	if (nums[i] === 0) { swap(i, l), l++ }
	// }
	// // 处理2
	// for (let i = n - 1; i >= l; i--) {
	// 	if (nums[i] === 2) { swap(i, r), r-- }
	// }

	// 荷兰国旗问题解法
	let l = 0, r = nums.length - 1, cur = 0
	while (cur <= r) {
		if (nums[cur] === 0) {
			swap(cur, l), l++, cur++
		} else if (nums[cur] === 2) {
			swap(cur, r), r--
		} else {
			cur++
		}
	}
	return nums

	function swap(a, b) {
		const t = nums[a]
		nums[a] = nums[b]
		nums[b] = t
	}
};

const case1 = [2, 0, 2, 1, 1, 0]
console.log(sortColors(case1))
