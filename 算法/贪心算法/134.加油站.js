/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
	// 贪心算法，贪 
	// 每走到一站邮箱得到的油量数组
	// gas :  [2, 5, 2, 3, 5]
	// cost : [1, 2, 8, 2, 4]
	// rest : [1, 3,-6, 1, 1]
	// 可知，只有从下标为3的位置开始，才能走完一圈
	let totalSum = 0, curSum = 0, start = 0
	for (let i = 0; i < gas.length; i++) {
		const rest = gas[i] - cost[i]
		totalSum += rest
		curSum += rest
		if (curSum < 0) {
			start = i + 1, curSum = 0
		}
	}
	return totalSum < 0 ? -1 : start
};

const c = [[1, 2, 3, 4, 5], [3, 4, 5, 1, 2]]
console.log(canCompleteCircuit(...c))
