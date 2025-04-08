function canPartition(nums: number[]): boolean {
	// 01背包,dp[j]表示容量为j的背包能装的最大价值
	// const sum = nums.reduce((pre, cur) => pre + cur)
	// if (sum % 2 !== 0) { return false }
	// const bagSize = sum / 2
	// const dp: number[] = new Array(bagSize + 1).fill(0)
	//
	// for (let i = 0; i < nums.length; i++) {
	// 	for (let j = bagSize, good = nums[i]; j >= good; j--) {
	// 		dp[j] = Math.max(dp[j], dp[j - good] + good)
	// 	}
	// }
	//
	// return dp[bagSize] === bagSize

	// 01背包,dp[j]表示容量为j的背包是否能够装满
	const sum = nums.reduce((pre, cur) => pre + cur)
	if (sum % 2 !== 0) { return false }
	const bagSize = sum / 2
	const dp: boolean[] = new Array(bagSize + 1).fill(false)
	// 初始化，容量为0的背包是能够装满的
	dp[0] = true

	for (let i = 0; i < nums.length; i++) {
		for (let j = bagSize, good = nums[i]; j >= good; j--) {
			dp[j] = dp[j] || dp[j - good]
		}
	}

	return dp[bagSize]
};

console.log(canPartition([1, 5, 11, 5]));

