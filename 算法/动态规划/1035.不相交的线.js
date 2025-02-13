/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
	// 两条不相交的线，相当于求的是公共子序列问题
	// dp[i][j]: nums1[0,i-1]和nums2[0,j-1]的最长公共子序列长度为dp[i][j]
	const m = nums1.length, n = nums2.length
	// 初始化：dp[0][0] 相当于两个空的数组，公共子序列长度为0
	const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (nums1[i - 1] === nums2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
			}
		}
		// console.log(dp)
	}
	return dp[m][n]
};

const case1 = [[2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]]
console.log(maxUncrossedLines(...case1))
