/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
	const stack = []
	for (const c of tokens) {
		if (isNaN(+c)) {
			const b = stack.pop(), a = stack.pop()
			if (c === '+') {
				stack.push(a + b)
			} else if (c === '-') {
				stack.push(a - b)
			} else if (c === '*') {
				stack.push(a * b)
			} else if (c === '/') {
				stack.push(parseInt(a / b))
			}
		} else {
			stack.push(+c)
		}
	}
	return stack.pop()
};

const c = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
console.log(evalRPN(c))
