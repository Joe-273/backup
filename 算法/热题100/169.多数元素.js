/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	// 哈希表
	// const map = new Map(), n = nums.length
	// for (const num of nums) {
	// 	map.set(num, (map.get(num) || 0) + 1)
	// 	if (map.get(num) > n / 2) {
	// 		return num
	// 	}
	// }

	// 投票法
	// nums:      [7, 7, 5, 7, 5, 1 | 5, 7 | 5, 5, 7, 7 | 7, 7, 7, 7]
	// candidate:  7  7  7  7  7  7   5  5   5  5  5  5   7  7  7  7
	// count:      1  2  1  2  1  0   1  0   1  2  1  0   1  2  3  4
	let ans, count = 0, i = -1
	while (++i < nums.length) {
		if (count === 0) { ans = nums[i] }
		count += nums[i] === ans ? +1 : -1
	}
	return ans
};

const case1 = [2, 2, 1, 1, 1, 2, 2]
const case2 = [7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 7, 7, 7, 7]
console.log(majorityElement(case2))
