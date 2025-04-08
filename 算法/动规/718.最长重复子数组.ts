function findLength(nums1: number[], nums2: number[]): number {
	// 二维dp
	// const m = nums1.length, n = nums2.length
	// const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
	// let ans = 0
	// for (let i = 1; i <= m; i++) {
	// 	for (let j = 1; j <= n; j++) {
	// 		if (nums1[i - 1] === nums2[j - 1]) {
	// 			dp[i][j] = dp[i - 1][j - 1] + 1
	// 		}
	// 		ans = Math.max(dp[i][j], ans)
	// 	}
	// }
	// return ans

	// 状态压缩
	const m = nums1.length, n = nums2.length
	const dp: number[] = new Array(n + 1).fill(0)
	let ans = 0
	for (let i = 1; i <= m; i++) {
		for (let j = n; j >= 1; j--) {
			if (nums1[i - 1] !== nums2[j - 1]) {
				dp[j] = 0
				continue
			}
			dp[j] = dp[j - 1] + 1
			ans = Math.max(dp[j], ans)
		}
		console.log(dp);

	}
	return ans
};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));

