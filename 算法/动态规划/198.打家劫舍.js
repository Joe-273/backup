/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	const len = nums.length, dp = new Array(len)
	if (len === 1) {
		return nums[0]
	}

	dp[0] = nums[0]
	for (let i = 1; i < len; i++) {
		// 偷第i间房：
		// 金额 = 当前房的金额 + i-2 间房前偷盗的最大值
		const one = nums[i] + (dp[i - 2] || 0)
		// 不偷第i间房：
		// 金额 = i-1 间房前偷盗的最大值
		const two = dp[i - 1]
		dp[i] = Math.max(one, two)
	}

	return dp[len - 1]
};

const case1 = [1, 2, 3, 1]
const case2 = [2, 7, 9, 3, 1]
const case3 = [2, 1, 1, 2]
console.log(rob(case1))
