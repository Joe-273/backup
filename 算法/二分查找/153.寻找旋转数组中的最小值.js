/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
	let l = 0, r = nums.length - 1, mid

	while (l < r) {
		// 下面的两种mid的结果几乎没有差别
		// 只是后者是为了避免两数相加导致结果过大
		// 也就是为了避免整数溢出
		// mid = Math.floor((l + r) / 2);
		mid = l + Math.floor((l - r) / 2)
		if (nums[mid] > nums[r]) {
			// 说明mid在左半部分
			// 并且最小值不可能在这部分
			l = mid + 1
		} else {
			// mid在右半部分
			// 最小值有可能就是mid
			// 因为最小值就在右半部分的第一个数
			r = mid
		}
	}

	return nums[r];
}

const case1 = [4, 5, 6, 7, 0, 1, 2]
console.log(findMin(case1))
