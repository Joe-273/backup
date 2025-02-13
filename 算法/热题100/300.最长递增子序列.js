/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
	const m = nums.length
	// dp[i]的定义：以nusm[i]结尾的递增子序列的最长递增子序列长度为dp[i]
	const dp = new Array(m).fill(1)
	let ans = 0
	for (let i = 1; i < m; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
		// console.log(dp)
		ans = ans > dp[i] ? ans : dp[i]
	}
	return ans
};

const case1 = [10, 9, 2, 5, 3, 7, 101, 18]
const case2 = [1, 3, 6, 7, 9, 4, 10, 5, 6]
const case3 = [0, 1, 0, 3, 2, 3]
console.log(lengthOfLIS(case2))
