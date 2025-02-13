/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
	const sum = nums.reduce((pre, cur) => pre + cur, 0)
	if (sum % 2 !== 0) { return false }
	const target = sum >> 1
	const dp = new Array(target + 1).fill(0)
	for (let i = 0; i < nums.length; i++) {
		for (let j = target; j >= nums[i]; j--) {
			dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
		}
		// console.log(dp)
	}
	return dp[target] === target
};

const case1 = [1, 5, 11, 5]
const case2 = [1, 2, 3, 5]
console.log(canPartition(case1))
