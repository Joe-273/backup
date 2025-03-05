/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
	const len = temperatures.length
	const ans = new Array(len).fill(0)
	const stack = []

	for (let i = 0; i < len; i++) {
		while (
			stack.length
			&& temperatures[i] > temperatures[stack[stack.length - 1]]
		) {
			const index = stack.pop()
			ans[index] = i - index
		}
		stack.push(i)
	}

	return ans
};

const case1 = [73, 74, 75, 71, 69, 72, 76, 73]
const case2 = [30, 40, 50, 60]
console.log(dailyTemperatures(case1)) 
