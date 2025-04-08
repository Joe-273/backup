/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
	let sum = 0, ans = 0
	let hash = new Array(k).fill(0)
	hash[0] = 1
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]
		const prefixSumModK = ((sum % k) + k) % k
		ans += hash[prefixSumModK]
		hash[prefixSumModK]++
	}
	return ans
};

// console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5))
