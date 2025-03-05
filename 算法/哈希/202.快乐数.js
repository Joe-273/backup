/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
	// 思路
	// const set = new Set()
	// while (true) {
	// 	const sum = getSum(n)
	// 	if (sum === 1) {
	// 		return true
	// 	}
	// 	if (set.has(sum)) {
	// 		return false
	// 	}
	// 	set.add(sum)
	// 	n = sum
	// }
	//
	// function getSum(num) {
	// 	let sum = 0
	// 	while (num) {
	// 		sum += (num % 10) ** 2
	// 		num = Math.floor(num / 10)
	// 	}
	// 	return sum
	// }

	const set = new Set()
	while (!set.has(n)) {
		set.add(n)
		let sum = 0
		while (n !== 0) {
			sum += Math.pow(n % 10, 2)
			n = Math.floor(n / 10)
		}
		if (sum === 1) {
			return true
		}
		n = sum
	}
	return false
};

const case1 = 19
console.log(isHappy(case1))
