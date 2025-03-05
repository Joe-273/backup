/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
	digits = Array.from(digits)
	const m = digits.length
	const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
	const ans = []
	backtracking(0, [])
	return ans

	function backtracking(start, path) {
		const len = path.length
		if (len === m) {
			if (len !== 0) { ans.push(path.join('')) }
			return
		}
		const str = map[+digits[start]]
		for (let i = 0; i < str.length; i++) {
			path.push(str[i]);
			backtracking(start + 1, path)
			path.pop()
		}
	}
};

const case1 = '23'
const case2 = ''
console.log(letterCombinations(case1))
