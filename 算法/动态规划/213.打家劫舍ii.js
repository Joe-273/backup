/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	// 分两种情况，1.不要头元素；2.不要尾元素
	const len = nums.length
	if (len === 0) return 0
	if (len === 1) return nums[0]
	const r1 = robRange(0, len - 2)
	const r2 = robRange(1, len - 1)
	return Math.max(r1, r2)

	function robRange(start, end) {
		if (start === end) {
			return nums[start]
		}
		const dp = new Array(len).fill(0)
		dp[start] = nums[start]
		dp[start + 1] = Math.max(nums[start], nums[start + 1])
		for (let i = start + 2; i <= end; i++) {
			dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
		}
		return dp[end]
	}
};

