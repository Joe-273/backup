// pre[i] 为[0, i] 中所有数的和，也就是前缀和
// 所以有：pre[i] = pre[i - 1] + nums[i]
//
// 题目中和为k的连续的数组，假设为[j, ..., i]
// 简单推导得：pre[i] - pre[j - 1] == k
//   具体如下：
//   ( nums[0] + nums[1] + ... + nums[i] ) - ( nums[0] + ... + nums[j - 1] ) 
//   => nums[j] + nums[j + 1] + ... + nums[i] = k
// 所以有：pre[j -1] == pre[i] - k
//
// 也就是可以维护一个哈希表，存放[0, ..., i] 的前缀和，以及其出现的次数
// 如果当前的前缀和pre[i] 减去目标和k的值，如果存在于这个表中
// 则说明存在连续的数组和为k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
	const map = new Map()
	let curPre = 0
	let ans = 0
	// 初始化map，表示当前的前缀和出现过1次
	map.set(curPre, 1)
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i]
		curPre += num
		// 先判断当前数组位置往左，是否存在连续下标的子数组和为k
		if (map.has(curPre - k)) {
			ans += map.get(curPre - k)
		}
		// 再将当前的前缀和统计到哈希表中
		if (map.has(curPre)) {
			map.set(curPre, map.get(curPre) + 1)
		} else {
			map.set(curPre, 1)
		}
	}
	return ans
};

