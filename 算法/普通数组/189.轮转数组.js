// [1, 2, 3, 4, 5] , k = 2
// 过程：
// 1.先倒置整个数组：
// [5, 4, 3, 2, 1]
// 2.倒置前k 项
// [4, 5, 3, 2, 1]
// 3.倒置k+1到末尾项
// [4, 5, 1, 2, 3]
// 结果即为[4, 5, 1, 2, 3]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	const len = nums.length
	// 需要注意 k 有可能超过数组长度
	// 而超过的部分是没有意义的，因为轮转后超出的部分后还是原数组
	// 所以取 k = k % len
	k %= len
	// 反转nums数组
	reverse(nums, 0, len - 1);
	// 反转nums数组的[0, k-1]
	reverse(nums, 0, k - 1);
	// 反转nums数组的[k, nums.length]
	reverse(nums, k, len - 1);
};
function reverse(nums, start, end) {
	while (start < end) {
		const tmp = nums[start]
		nums[start] = nums[end]
		nums[end] = tmp
		start++
		end--
	}
}

const case1 = [[1, 2, 3, 4, 5, 6, 7], 3]
console.log(rotate(...case1))
