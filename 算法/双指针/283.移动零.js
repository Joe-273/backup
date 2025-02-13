// 左右指针同时从 下标0 向右边移动
// 右指针只要遇到非 0 的数就会与左指针处的数交换
// 一旦完成交换左指针的下标自增1
//
// 也就是保证左指针左边以及自身位置的数不为0
// 右指针左边直到左指针处均为零。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let left = 0
	let right = 0
	const n = nums.length
	while (right < n) {
		if (nums[right]) {
			[nums[left], nums[right]] = [nums[right], nums[left]]
			left++
		}
		right++
	}
};

const nums1 = [0, 1, 6, 13, 2, 0]
const nums2 = [0]
const nums3 = [0, 1, 0, 3, 12]
moveZeroes(nums3)

