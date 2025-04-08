function lengthOfLIS(nums: number[]): number {
	// 动态规划
	// const len = nums.length
	// const dp: number[] = new Array(len).fill(1)
	// let ans = 1
	// for (let i = 1; i < len; i++) {
	// 	const cur = nums[i]
	// 	for (let j = 0; j < i; j++) {
	// 		if (cur > nums[j]) {
	// 			dp[i] = Math.max(dp[i], dp[j] + 1)
	// 		}
	// 	}
	// 	ans = Math.max(dp[i], ans)
	// }
	// return ans

	// 维护一个递增序列，并且让末尾值尽量小
	const tails: number[] = []
	for (const num of nums) {
		let l = -1, r = tails.length
		while (l + 1 !== r) {
			const mid = (l + r) >>> 1
			if (tails[mid] >= num) {
				r = mid
			} else {
				l = mid
			}
		}
		tails[r] = num
	}
	return tails.length
};

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));

