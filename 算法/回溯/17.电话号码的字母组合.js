/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
	const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
	const ans = []
	backTracking('', 0)
	return ans

	function backTracking(combine, index) {
		// index 表示当前的号码
		if (index === digits.length) {
			combine && ans.push(combine)
			return
		}
		// 当前号码对应的字母集字符串
		const curStr = map[digits[index]]
		for (let i = 0; i < curStr.length; i++) {
			combine += curStr[i]
			// 递归
			backTracking(combine, index + 1)
			// 回溯
			combine = combine.slice(0, -1);
		}
	}
};

const case1 = '23'
const case2 = ''
console.log(letterCombinations(case1))
