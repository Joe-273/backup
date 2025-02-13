// [0, ..., i, ..., end] 
// 这个数组中除了i外所有数字的乘积 = i位置的前缀积 * i位置的后缀积
// 假设该数组的前缀积数组为preFix，后缀积数组为postfix
// 那么该数组每个位置除了自身外的乘积所形成的数组为:
// [profix[0] * postfix[0], ...,profix[i] * postfix[i], ..., profix[end] * postfix[end]]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
	const len = nums.length
	const ans = new Array(len)

	// 循环求出nums的前缀积，作为目前的结果数组
	let prefix = 1
	for (let i = 0; i < len; i++) {
		ans[i] = prefix
		prefix *= nums[i]
	}

	// 从后开始循环，求除相应位置的后缀积
	// 然后乘上当前位置的前缀积
	let postfix = 1
	for (let i = len - 1; i >= 0; i--) {
		ans[i] *= postfix
		postfix *= nums[i]
	}

	return ans
};

const case1 = [1, 2, 3, 4]
const case2 = [-1, 1, 0, -3, 3]
console.log(productExceptSelf(case2))
