function findLengthOfLCIS(nums: number[]): number {
	const len = nums.length
	const dp: number[] = new Array(len).fill(1)
	let ans = 1
	for (let i = 1; i < len; i++) {
		if (nums[i] > nums[i - 1]) {
			dp[i] = dp[i - 1] + 1
		}
		ans = Math.max(dp[i], ans)
	}
	return ans
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));

