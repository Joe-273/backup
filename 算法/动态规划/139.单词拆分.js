/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
	// dp[i]含义：字符串长度为i的背包，能否被这些物品(wordDict)组成
	// 比如s = 'leetcode'，dp[4] = (dp[0] && wordDict.has('leet'))
	// s = 'leetcode'，dp[8] = (dp[4] && wordDict.has('code'))
	const len = s.length, dp = new Array(len + 1).fill(false)
	const set = new Set(wordDict)
	// 找到最长的字串长度，方便后序剪枝
	let maxWordLen = 0
	for (const word of wordDict) {
		maxWordLen = Math.max(maxWordLen, word.length)
	}
	// 初始化：dp[0]表示空字符是否能由物品组成
	dp[0] = true
	// 遍历：
	// 因为组成的s有顺序要求，所以是求排列数
	// 所以先遍历背包再遍历物品
	// 背包容量从1开始遍历
	for (let i = 1; i <= len; i++) {
		// 剪枝
		const start = Math.max(0, i - maxWordLen)
		// 遍历的物品为子字符串
		for (let j = start; j < i; j++) {
			if (dp[j] && set.has(s.substring(j, i))) {
				dp[i] = true
				break
			}
		}
		// 打印
		// console.log(dp)
	}
	return dp[len]
};

const case1 = ["leetcode", ["leet", "code"]]
console.log(wordBreak(...case1))
