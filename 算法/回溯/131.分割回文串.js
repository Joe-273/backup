/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
	const ans = [], length = s.length
	// 先动态规划，求出s各个区间是否是回文串
	// dp[i][j]：以i开始，j结束的子串是否为回文串
	const dp = Array.from({ length }, () => new Array(length).fill(false))
	for (let i = length - 1; i >= 0; i--) {
		for (let j = i; j < length; j++) {
			if (s[i] === s[j]) {
				dp[i][j] = (j - i <= 2) || dp[i + 1][j - 1]
			}
		}
	}
	// 回溯
	backtracking(0, [])
	return ans

	function backtracking(start, path) {
		if (start === length) { return ans.push(Array.from(path)) }

		for (let i = start; i < length; i++) {
			// 是回文子串，则继续回溯
			if (dp[start][i]) {
				path.push(s.slice(start, i + 1))
				backtracking(i + 1, path)
				path.pop()
			}
		}
	}
};

const case1 = 'abbab'
console.log(partition(case1))
