function climbStairs(n: number): number {
	// const dp: number[] = new Array(n)
	// dp[0] = 1, dp[1] = 2
	// for (let i = 2; i < n; i++) {
	// 	dp[i] = dp[i - 1] + dp[i - 2]
	// }
	// return dp[n - 1]

	// dp[i]仅仅跟dp[i-1]和dp[i-2]的状态有关，可以使用两个变量来替代
	let pre = 1, cur = 2
	if (n === 1) { return pre }
	if (n === 2) { return cur }
	for (let i = 2; i < n; i++) {
		const temp = cur
		cur = pre + cur
		pre = temp
	}
	return cur
};

console.log(climbStairs(5));


