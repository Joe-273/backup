/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	// nums 为升序数组
	let l = 0, r = nums.length - 1, mid
	while (l <= r) {
		mid = Math.floor((l + r) / 2)
		if (nums[mid] === target) {
			return mid
		}
		if (nums[mid] > target) {
			r = mid - 1
		} else {
			l = mid + 1
		}
	}
	return l
};
const case1 = [[1, 3, 5, 6], 7]
const case2 = [[5, 7, 7, 8, 8, 8, 8, 10], 8]
console.log(searchInsert(...case2))
