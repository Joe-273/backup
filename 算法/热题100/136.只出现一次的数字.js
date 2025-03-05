/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	// const set = new Set()
	// for (const num of nums) {
	// 	if (set.has(num)) {
	// 		set.delete(num)
	// 	} else {
	// 		set.add(num)
	// 	}
	// }
	// return set.keys().next().value

	let ans = 0
	for (const num of nums) {
		// 异或操作
		// 异或操作的两个重要性质：
		// 自反性：任何数字与自身异或的结果为0，即a ^ a = 0。
		// 交换律和结合律：异或操作满足交换律和结合律，即a ^ b ^ a = b。
		ans = ans ^ num
	}
	return ans
};

const case1 = [4, 1, 2, 1, 2]
console.log(singleNumber(case1))
