/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
	nums.sort((a, b) => Math.abs(a) - Math.abs(b))
	for (let i = nums.length; i >= 0; i--) {
		if (k !== 0 && nums[i] < 0) {
			nums[i] *= -1
			k--
		}
	}
	if (k !== 0 && k % 2 === 1) { nums[0] *= -1 }
	return nums.reduce((pre, cur) => pre + cur, 0)
};

const c1 = [[2, -3, -1, 5, -4], 2]
const c2 = [[4, 2, 3], 1]
console.log(largestSumAfterKNegations(...c1))
