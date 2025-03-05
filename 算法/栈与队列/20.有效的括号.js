/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	if (s.length % 2 != 0) return false
	s = s.split('')

	const stack = [], map = { '(': ')', '{': '}', '[': ']' }
	for (let i = 0; i < s.length; i++) {
		const char = s[i]
		if (map[char] === undefined) {
			// 右括号
			if (char !== map[stack.pop()]) {
				return false
			}
		} else {
			// 左括号
			stack.push(char)
		}
	}

	return stack.length === 0
};

const case1 = '{]'
console.log(isValid(case1))
