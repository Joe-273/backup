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

	const stack = []
	s = s.split('')
	const map = {
		'(': ')',
		'{': '}',
		'[': ']'
	}

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (map[char] === undefined) {
			if (char !== stack.pop()) {
				return false
			}
		} else {
			stack.push(map[char])
		}
	}

	if (stack.length) {
		return false
	}
	return true
};
const case1 = '{]'
console.log(isValid(case1))
