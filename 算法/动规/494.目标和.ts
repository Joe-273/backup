function findTargetSumWays(nums: number[], target: number): number {
	// 思路就是把这个数组分成两个部分，然后有以下的关系：
	// 1:  l + r = sum
	// 2:  l - r = target
	// 可以推出 l = (sum + target) / 2
	// 也就是其中有一部分的和要等于(sum + target) / 2
	const sum = nums.reduce((pre, cur) => pre + cur)
	if (sum < Math.abs(target) || (sum + target) % 2 !== 0) {
		return 0
	}
	const bagSize = (sum + target) / 2
	const dp: number[] = new Array(bagSize + 1).fill(0)
	dp[0] = 1
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i]
		for (let j = bagSize; j >= num; j--) {
			dp[j] += dp[j - num]
		}
	}
	return dp[bagSize]
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));

