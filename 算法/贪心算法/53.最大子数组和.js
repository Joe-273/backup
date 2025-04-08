/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	// 贪心，贪 子数组的最大和
	// 要点：如果当前子数组的和为负数的时候，直接排除当前子数组
	/*
		比如当前数组[-2,1,-3,4,-1,2,1,-5,4]，从左到右遍历寻找子数组的时候
		子数组[-2]的和为-1，此时不论后面的数字多大，相加一定比原来小，所以直接排除
		再继续遍历，得到子数组[1,-3]，和为-2，也直接排除
		再继续遍历，得到子数组[4,-1,2,1]，此时的和最大，记录下来
		最终得到的和为正数的子数组为[4,-1,2,1,-5,4]，但和不是最大
	*/
	let ans = -Infinity, curSum = 0
	for (let i = 0; i < nums.length; i++) {
		if (curSum < 0) { curSum = 0 }
		curSum += nums[i]
		ans = curSum > ans ? curSum : ans
	}
	return ans
};
