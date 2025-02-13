/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
	// const m = nums1.length, n = nums2.length
	// // dp[i][j] ：以下标i - 1为结尾的nums1，和以下标j - 1为结尾的nums2，最长重复子数组长度为dp[i][j]
	// // dp[i][j]，却表示i-1和j-1的元素，主要是为了使用dp[0][0]作为未操作前的初始值，方便操作
	// // 初始化，dp[0][0]=0，其他的也初始化为0
	// const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
	// let ans = 0
	// for (let i = 1; i <= m; i++) {
	// 	for (let j = 1; j <= n; j++) {
	// 		if (nums1[i - 1] === nums2[j - 1]) {
	// 			dp[i][j] = dp[i - 1][j - 1] + 1
	// 		}
	// 		ans = dp[i][j] > ans ? dp[i][j] : ans
	// 	}
	// 	// 打印
	// 	// console.log(dp)
	// }
	// return ans

	// 状态压缩，滚动数组
	// 因为dp[i][i] 只是由dp[i-1][j-1]推导而来，所以可以把二维数组压缩为一维数组
	const m = nums1.length, n = nums2.length
	const dp = new Array(n + 1).fill(0)
	let ans = 0
	for (let i = 1; i <= m; i++) {
		// 反向遍历，否则遍历到j的时候，j-1元素就被操作过了
		for (let j = n; j >= 1; j--) {
			if (nums1[i - 1] === nums2[j - 1]) {
				dp[j] = dp[j - 1] + 1
				ans = dp[j] > ans ? dp[j] : ans
			} else {
				dp[j] = 0
			}
		}
		// 打印
		// console.log(dp)
	}
	return ans
};

const case1 = [[1, 2, 3, 2, 1], [3, 2, 1, 4, 7]]
console.log(findLength(...case1))
