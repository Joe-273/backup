/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
	// 可以转换为：
	// 将数组分割成两个，一个表示正数，一个表示负数
	// 两个数组和相见等于target
	const len = nums.length
	let sum = 0
	for (let i = 0; i < len; i++) {
		sum += nums[i]
	}
	// 正数数组和-负数数组和=target
	// 正数数组和+负数数组和=sum
	// 两式结合=> 负数数组和=(sum-target)/2
	// 如果是sum - target < 0 的情况，说明怎么加都得不到目标值
	// 当(sum - target) / 2不能得到整数的情况，说明没有这样的组合能够得到目标值
	if ((sum - target) < 0 || (sum - target) % 2 !== 0) {
		return 0
	}
	target = (sum - target) / 2
	// dp[i]的含义：装满容量为i的背包有dp[i]种方法
	// dp[i] += dp[i - nums[j]]
	// 假设当前物品为价值为1，那么有dp[4]种方法可以凑成价值5
	// 假设当前物品为价值为2，那么有dp[3]种方法可以凑成价值5
	// 假设当前物品为价值为3，那么有dp[2]种方法可以凑成价值5
	// ...
	// 所以dp[5] 集成了物品价值为j时，能够凑成价值为5的方法
	const dp = new Array(target + 1).fill(0)
	// 初始化: dp[0] = 1，遍历物品前，背包容量为0有1种方法可以凑成价值0
	dp[0] = 1
	// 即什么都不放到背包中
	// 但是遍历数组后，可能存在价值为0的物品，所以dp[0]并非不变
	for (let j = 0; j < len; j++) {
		for (let i = target; i >= nums[j]; i--) {
			dp[i] += dp[i - nums[j]]
		}
		// 打印
		// console.log(dp)
	}
	return dp[target]
};

const case1 = [[1, 1, 1, 1, 1], 3]
const case2 = [[1, 0], 1]
const case3 = [[2, 107, 109, 113, 127, 131, 137, 3, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 47, 53], 1000]
console.log(findTargetSumWays(...case3))
