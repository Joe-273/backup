/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
// var maxSubArray = function(nums) {
// 	// 前缀和，作为子数组的和
// 	let pre = 0
// 	let ans = nums[0]
// 	nums.forEach(i => {
// 		// 当前前缀和的值和当前值相比，取较大的作为前缀和
// 		// 也就是如果前面的数组和比当前的数小
// 		// 则数组就从当前的位置开始
// 		pre = Math.max(pre + i, i)
// 		ans = Math.max(ans, pre)
// 	})
// 	return ans
// };

// 前缀和
// var maxSubArray = function(nums) {
// 	const len = nums.length
// 	let ans = -10000
//
// 	const pre = new Array(len + 1).fill(0)
// 	for (let i = 0; i < len; i++) {
// 		pre[i + 1] = pre[i] + nums[i]
// 	}
//
// 	const minPre = new Array(len + 1).fill(0)
// 	for (let i = 0; i < len; i++) {
// 		minPre[i + 1] = Math.min(minPre[i], pre[i + 1])
// 	}
//
// 	for (let i = 0; i < len; i++) {
// 		ans = Math.max(ans, pre[i + 1] - minPre[i])
// 	}
//
// 	return ans
// };

var maxSubArray = function(nums) {
	let ans = nums[0]
	let pre = nums[0] // 前缀和
	for (let i = 1; i < nums.length; i++) {
		const num = nums[i]
		if (pre + num > num) {
			// 如果当前的前缀和大于当前数
			// 则覆盖原本的前缀和
			pre = pre + num
		} else {
			// 否则让前缀和等于当前数字
			// 也就是前缀和从当前数开始
			pre = num
		}
		ans = Math.max(ans, pre)
	}
	return ans
};


const case1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const case2 = [5, 4, -1, 7, 8]
const case3 = [1]
const case4 = [-2, 1]
console.log(maxSubArray(case4))
