/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	const ans = []
	backTracking('', 0, 0)
	return ans

	// 因为只有左括号的数量多于右括号的时候
	// 才会向path中添加右括号
	// 所以最后只需要判断右括号的数量足够时
	// 将path加入结果中即可
	function backTracking(path, lNum, rNum) {
		if (rNum === n) {
			ans.push(path)
			return
		}
		if (lNum < n) {
			path += '('
			backTracking(path, lNum + 1, rNum)
			// 回溯
			path = path.slice(0, -1)
		}
		if (lNum > rNum) {
			path += ')'
			backTracking(path, lNum, rNum + 1)
		}
	}
};

const case1 = 3
console.log(generateParenthesis(case1))
