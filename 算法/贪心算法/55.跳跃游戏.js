/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	// 思路1
	// for (let i = 0, cover = 0; i < nums.length; i++) {
	// 	if (i > cover) {
	// 		return false
	// 	}
	// 	cover = Math.max(cover, i + nums[i])
	// }
	// return true
	// 思路2
	for (let i = 0, cover = 0; i <= cover; i++) {
		cover = Math.max(cover, i + nums[i])
		if (cover >= nums.length - 1) {
			return true
		}
	}
	return false
};

const case1 = [3, 2, 1, 0, 4] // false
const case2 = [2, 5, 0, 0] // true
console.log(canJump(case1))
