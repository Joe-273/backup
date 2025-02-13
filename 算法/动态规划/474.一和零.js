/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
	// dp[i][j]含义：
	// 容量为[i][j]的背包,装下的物品
	// i指的是'0'的容量，j是'1'的容量
	// 初始化:
	// dp[0][0] = 0，i，j都为0的情况下，背包装不下任何物品
	const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
	// 遍历顺序:
	// 先遍历物品，再遍历背包
	for (const str of strs) {
		// x记录'0'的数量，y记录'1'的数量
		let x = 0, y = 0
		for (const char of str) { char === '0' ? x++ : y++ }
		// 因为每个物品只有一个，所以倒叙遍历
		// 使用二维滚动数组
		for (let i = m; i >= x; i--) {
			for (let j = n; j >= y; j--) {
				dp[i][j] = Math.max(dp[i][j], dp[i - x][j - y] + 1)
			}
		}
		// 遍历
		// console.log(dp)
	}
	return dp[m][n]
};

const case1 = [["10", "0001", "111001", "1", "0"], 5, 3]
console.log(findMaxForm(...case1))
