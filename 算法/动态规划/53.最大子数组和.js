/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	// // 动态规划
	// // dp[i]：[0, i]下标的最大连续子数组和
	// const len = nums.length
	// const dp = new Array(len).fill(0)
	// // 初始化dp[0]=nums[0]
	// let ans = dp[0] = nums[0]
	// for (let i = 1; i < len; i++) {
	// 	// if (nums[i] + dp[i - 1] > nums[i]) {
	// 	// 	dp[i] = dp[i - 1] + nums[i]
	// 	// } else {
	// 	// 	dp[i] = nums[i]
	// 	// }
	// 	dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
	// 	ans = dp[i] > ans ? dp[i] : ans
	// 	// 打印
	// 	// console.log(dp)
	// }
	// return ans

	// 贪心
	let ans = -Infinity, curSum = 0
	for (let i = 0; i < nums.length; i++) {
		curSum += nums[i]
		ans = ans > curSum ? ans : curSum
		if (curSum < 0) {
			curSum = 0
		}
	}
	return ans
};

const case1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(case1))

