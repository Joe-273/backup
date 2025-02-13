/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
	// dp[i]指的是装满容量为i的背包有dp[i]种排列
	// dp[i]+=dp[i-nums[j]]
	// 当前物品重量为1时，装满容量为5的背包有dp[5-1]种排列
	// 当前物品重量为2时，装满容量为5的背包有dp[5-2]种排列
	// ...
	// 当前物品重量为5时，装满容量为5的背包有dp[5-5]种排列
	// => dp[5]+=dp[i-nums[j]],j from 0 to nums.length - 1
	const dp = new Array(target + 1).fill(0)
	// 初始化,dp[0]=1,因为dp[i]通过dp[i-j]累加而来，所以dp[0]=1才能让dp[i]有意义
	// 且可以认为装满容量为0的背包有1种方法，即什么都不放
	dp[0] = 1

	// 可以查看这个排列组合
	// permutations[i] 保存所有凑成目标值 i 的排列
	// const permutations = new Array(target + 1).fill(null).map(() => []);
	// permutations[0] = [[]]; // 初始化：凑成目标值 0 的排列为空排列

	// 因为题目求的是排列数，所以需要先遍历背包再遍历物品
	for (let i = 1; i <= target; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (i >= nums[j]) {
				dp[i] += dp[i - nums[j]]

				// 更新排列数组
				// if (permutations[i - nums[j]].length > 0) {
				// 	for (const permutation of permutations[i - nums[j]]) {
				// 		permutations[i].push([...permutation, nums[j]]);
				// 	}
				// }
			}
		}
		// 打印
		// console.log(dp)
		// console.log(permutations)
	}
	return dp[target]
};

const case1 = [[1, 2, 3], 4]
console.log(combinationSum4(...case1))
