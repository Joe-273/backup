/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	// const m = nums.length
	// // dp[i][0]表示以i为结尾的连续子数组的乘积的最大值
	// // dp[i][1]表示以i为结尾的连续子数组的乘积的最小值
	// const dp = Array.from({ length: m }, () => new Array(2))
	// dp[0][0] = dp[0][1] = nums[0]
	// let ans = dp[0][0]
	// for (let i = 1; i < m; i++) {
	// 	const cur = nums[i]
	// 	dp[i][0] = Math.max(cur, dp[i - 1][0] * cur, dp[i - 1][1] * cur)
	// 	dp[i][1] = Math.min(cur, dp[i - 1][0] * cur, dp[i - 1][1] * cur)
	// 	ans = ans > dp[i][0] ? ans : dp[i][0]
	// 	// console.log(dp)
	// }
	// return ans

	// 状态压缩
	let preMax, preMin, ans
	preMax = preMin = ans = nums[0]
	for (let i = 1; i < nums.length; i++) {
		const curMax = preMax
		const curMin = preMin
		preMax = Math.max(curMax * nums[i], curMin * nums[i], nums[i])
		preMin = Math.min(curMax * nums[i], curMin * nums[i], nums[i])
		ans = Math.max(ans, preMax)
	}
	return ans
};

const case1 = [2, 3, -2, 4]
console.log(maxProduct(case1))
