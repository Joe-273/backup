/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
	// 二分查找到目标值所在位置
	// 再用两个指针去找到目标值的边界
	const ans = [-1, -1]
	let l = 0, r = nums.length - 1, mid
	while (l <= r) {
		mid = Math.floor((l + r) / 2)
		if (nums[mid] === target) {
			let lP = mid, rP = mid
			while (nums[lP] === target) {
				ans[0] = lP
				lP--
			}
			while (nums[rP] === target) {
				ans[1] = rP
				rP++
			}
			break
		}
		if (nums[mid] > target) {
			r = mid - 1
		} else {
			l = mid + 1
		}
	}
	return ans
};
