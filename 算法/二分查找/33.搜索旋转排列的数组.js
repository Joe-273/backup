/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	let l = 0, r = nums.length - 1, mid
	while (l <= r) {
		mid = Math.floor((l + r) / 2)
		// 取值范围：[mid]
		if (nums[mid] === target) {
			return mid
		}
		if (nums[l] <= nums[mid]) {
			// 说明[l,mid)为递增增区间
			if (nums[l] <= target && target < nums[mid]) {
				// 如果target在[l,mid)区间内
				r = mid - 1
			} else {
				l = mid + 1
			}
		} else {
			// 否则说明(mid,r]为递增区间
			if (nums[mid] < target && target <= nums[r]) {
				// 如果target在(mid,r]区间内
				l = mid + 1
			} else {
				r = mid - 1
			}
		}

	}
	return -1
};

const case1 = [[4, 5, 6, 7, 0, 1, 2], 0]
console.log(search(...case1))
