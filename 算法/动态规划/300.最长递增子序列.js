/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
	// // 动态规划
	// // dp[i]表示下标为0到i时的最大递增子序列长度为dp[i]
	// // 当遍历到nums[i]>nums[j]的时候，有以下的关系：
	// // dp[i] = dp[j] + 1
	// // 所以有=> dp[i] = max(dp[i], dp[j]+1)
	// const len = nums.length
	// // 初始化，就算只有一个元素，递增子序列的长度至少都是1
	// const dp = new Array(len).fill(1)
	// // 遍历
	// let ans = 1
	// for (let i = 1; i < len; i++) {
	// 	for (let j = 0; j < i; j++) {
	// 		if (nums[i] > nums[j]) {
	// 			dp[i] = Math.max(dp[i], dp[j] + 1)
	// 		}
	// 	}
	// 	ans = Math.max(ans, dp[i])
	// 	// 打印
	// 	// console.log(dp)
	// }
	// return ans

	// 二分查找
	const tails = [] // 维护一个递增数组
	for (const num of nums) {
		let l = -1, r = tails.length
		while (l + 1 !== r) {
			const mid = (l + r) >> 1
			if (tails[mid] >= num) {
				r = mid
			} else {
				l = mid
			}
		}
		// 如果r指针没变，tails中没找到大于等于num的元素
		// if (r === tails.length) {
		// 	tails.push(num)
		// } else {
		// 	tails[r] = num
		// }
		// 以上逻辑可以统一为
		tails[r] = num
		// console.log(tails)
	}
	return tails.length
};

const case1 = [10, 9, 2, 5, 3, 7, 101, 18]
const case2 = [1, 3, 6, 7, 9, 4, 10, 5, 6]
console.log(lengthOfLIS(case1))
