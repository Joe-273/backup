/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
	const len = nums.length
	let sum = 0
	for (let i = 0; i < len; i++) {
		sum += nums[i]
	}

	// 如果数组和不能分成两个相等的整数和
	// 说明无法分割成元素和相等的两个子集
	if (sum % 2 !== 0) {
		return false
	}

	const target = sum / 2

	// // dp[i] 的含义：
	// // 容量为i的背包，能够装下的最大价值是dp[i]
	// // 初始化：dp[0]=0, 容量为0的背包能装下的最大价值为0
	// const dp = new Array(target + 1).fill(0)
	//
	// // 先遍历物品，再嵌套遍历背包
	// // 遍历含义：容量为i的背包放不放物品j，dp[i]取这两种情况的最大值
	// for (let j = 0; j < len; j++) {
	// 	// 循环条件是背包容量必须大于等于物品的重量
	// 	// 因为如果物品重量大于背包容量，那么根本放不进背背包
	// 	for (let i = target; i >= nums[j]; i--) {
	// 		// 为什么是dp[i]跟dp[i - nums[j]] + nums[j]取最大值？
	// 		// 因为使用的是一维滚动数组，从后往前遍历
	// 		// 所以dp[i]指的是上一个物品（上一轮循环）在容量为i的背包中的最大价值
	// 		dp[i] = Math.max(dp[i], dp[i - nums[j]] + nums[j])
	// 	}
	// }
	// // 打印
	// // console.log(dp)
	// return dp[target] === target

	// 更改dp数组定义
	// dp[i] 的含义：
	// 容量为i的背包，是否能够装下价值为i的物品
	// 初始化：dp[0]=true, 容量为0的背包总是能装下价值为0的物品
	const dp = new Array(target + 1).fill(false)
	dp[0] = true

	for (let j = 0; j < len; j++) {
		// i >= nums[j]：物品的重量不能大于背包容量
		for (let i = target; i >= nums[j]; i--) {
			// 装或者不装物品j的情况下，是否能够装满价值为i的背包
			// 等式右边的dp[i]表示不选择物品j的情况下，是否存在能装下价值为i的情况
			// dp[i - nums[j]]表示选择物品j的情况下，是否存在能装下价值为(i-物品j的价值)的情况
			dp[i] = dp[i] || dp[i - nums[j]]
		}
		// 打印
		// console.log(dp)
	}

	return dp[target]
};

const case1 = [1, 5, 11, 5]
const case2 = [1, 2, 3, 5]
console.log(canPartition(case1))
