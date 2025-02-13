/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
	// // 动态规划
	// // dp[i]表示以i为结尾的最长递增子序列
	// // 即这个递增子序列一定以i元素为结尾，但开头不确定
	// const len = nums.length
	// const dp = new Array(len).fill(1)
	// let ans = 1
	// for (let i = 1; i < len; i++) {
	// 	if (nums[i] > nums[i - 1]) {
	// 		dp[i] = dp[i - 1] + 1
	// 	}
	// 	// console.log(dp)
	// 	ans = Math.max(ans, dp[i])
	// }
	// return ans

	// 贪心
	const len = nums.length
	if (len === 1) return 1

	let ans = 1, curLen = 1
	for (let i = 1; i < len; i++) {
		if (nums[i] > nums[i - 1]) {
			curLen++
		} else {
			ans = Math.max(ans, curLen) // 计算结果
			curLen = 1 // 重新赋值
			// 提前结束
			// if (ans >= len - i) {
			// 	return ans
			// }
		}
	}
	// 循环正常结束，最后一次计算结果
	ans = Math.max(ans, curLen)
	return ans
};

const case1 = [1, 3, 5, 4, 7]
console.log(findLengthOfLCIS(case1))
