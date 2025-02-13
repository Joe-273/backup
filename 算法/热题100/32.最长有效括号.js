/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
	s = s.split('')
	const dp = new Array(s.length).fill(0)
	let ans = 0
	for (let i = 1; i < s.length; i++) {
		if (s[i] === ')') {
			if (s[i - dp[i - 1] - 1] === '(') {
				dp[i] = dp[i - 1] + 2 + (dp[i - dp[i - 1] - 2] ?? 0)
			}
		}
		// console.log(dp)
		ans = Math.max(ans, dp[i])
	}
	return ans
};

const case1 = ")()())"
console.log(longestValidParentheses(case1))
