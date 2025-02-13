
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
	const m = s.length
	const set = new Set(wordDict)
	const dp = new Array(m + 1).fill(false)
	dp[0] = true
	for (let i = 1; i <= m; i++) {
		for (let j = 0; j <= i; j++) {
			if (dp[j] && set.has(s.substring(j, i))) {
				dp[i] = true
			}
		}
		// console.log(dp)
	}
	return dp[m]
};

const case1 = ["leetcode", ["leet", "code"]]
console.log(wordBreak(...case1))
