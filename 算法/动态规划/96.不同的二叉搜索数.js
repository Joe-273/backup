/**
* @param {number} n
* @return {number}
*/
var numTrees = function(n) {
	// dp[i]指的是i个节点可以组成的不同二叉搜索树种类
	// 比如：
	// dp[5] = 
	// 1个节点能构成的二叉搜索树的所有情况
	// + 2个节点的所有情况
	// +...+ 5个节点的所有情况
	// 即递推公式得出， 以j为头节点时：
	// dp[i] += dp[j-1] * dp[i-j], j:[1, i]
	const dp = new Array(n + 1).fill(0)
	// 因为0个节点和1个节点的所有情况为1
	// 2个节点的所有情况为2（也可以选择通过推导得到）
	dp[0] = dp[1] = 1
	// 遍历
	// 因为dp[n]依赖的是dp[n-j]的结果
	// 所以应该是从前往后遍历
	for (let i = 2; i <= n; i++) {
		// j 表示 以j为头节点的情况
		for (let j = 1; j <= i; j++) {
			dp[i] += dp[j - 1] * dp[i - j]
		}
	}
	// 打印
	// console.log(dp)
	return dp[n]
};

const case1 = 4
console.log(numTrees(case1))
