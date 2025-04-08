/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	// 方法一
	// for循环下标超过了覆盖范围时，直接返回false
	// 看看for循环能不能走完，能走完就说明能到达最后
	// for (let i = 0, cover = 0; i < nums.length; i++) {
	// 	if (i > cover) { return false }
	// 	cover = Math.max(cover, i + nums[i])
	// }
	// return true

	// 方法二
	// 贪心算法，贪 最大的覆盖范围
	/*
		[2,3,1,1,4], 在第一个下标的时候
		覆盖范围为[2,3,1]
		在第二个下标的时候，覆盖范围为
		[2,3,1,1,4]，因为3的覆盖范围从3往后到4，即[1,1,4]这个范围
	*/
	let cover = 0
	for (let i = 0; i <= cover; i++) {
		cover = Math.max(i + nums[i], cover)
		if (cover >= nums.length - 1) { return true }
	}
	return false
};

const case1 = [3, 2, 1, 0, 4] // false
const case2 = [2, 5, 0, 0] // true
console.log(canJump(case1))
