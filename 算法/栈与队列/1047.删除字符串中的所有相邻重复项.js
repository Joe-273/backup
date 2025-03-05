/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
	const stack = [];
	for (const c of s) {
		const len = stack.length
		if (len > 0 && stack[len - 1] === c) {
			stack.pop();
		} else {
			stack.push(c);
		}
	}
	return stack.join('');
};

const c = 'baabca'
console.log(removeDuplicates(c))
