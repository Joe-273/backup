/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
	// dp[i][j]：s[0,i-1]和t[0,j-1]的最长公共子序列长度
	// 初始化；dp[i][0]和dp[0][j]都为0
	s = s.split(''), t = t.split('')
	const m = s.length, n = t.length
	const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			if (s[i - 1] === t[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1
			} else {
				// 因为判断s是否为t的子序列，所以s的每个元素都需要考虑
				// 但是t就不是没有个元素都需要考虑
				// 不如s[i - 1]t[j - 1]不相等，就不考虑（跳过）t[j - 1] 
				// 所以dp[i][j-1] 是看s[i - 1]与 t[j - 2]的比较结果
				dp[i][j] = dp[i][j - 1]
			}
			if (dp[i][j] === m) {
				return true
			}
		}
	}
	return dp[m][n] === m
};

const case1 = ["abc", "ahbgdc"]
console.log(isSubsequence(...case1))
