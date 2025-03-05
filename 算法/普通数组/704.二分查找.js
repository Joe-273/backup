/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	const n = nums.length
	let l = -1, r = n
	while (l + 1 !== r) {
		const mid = (l + r) >> 1
		if (nums[mid] < target) {
			l = mid
		} else {
			r = mid
		}
	}
	if (nums[r] === target) {
		return r
	}
	return -1
};

const case1 = [[-1, 0, 3, 5, 9, 12], 9]
console.log(search(...case1))
