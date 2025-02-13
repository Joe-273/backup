// 题目要求时间复杂度为O(n)，空间复杂度为O(1)
// 
// 思路：将原数组视为哈希表，将num 放在 nums[num - 1] 的位置
// 这个过程中nums 应该在 [1, nums.length] 范围内
// 这样做过之后数组中所有[1, nums.length] 的数都在nums[num - 1]
//
// 此时只要找到改变后的数组中第一个不在[1, nums.length]的数
// 其下标对应的数即为缺失的第一个正数
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
	const len = nums.length
	for (let i = 0; i < len; i++) {
		while (nums[i] >= 1 && nums[i] <= len) {
			// 如果数组本就在正确的位置，直接结束循环
			if (nums[nums[i] - 1] === nums[i]) {
				break
			}
			// 交换位置
			const temp = nums[nums[i] - 1]
			nums[nums[i] - 1] = nums[i]
			nums[i] = temp
		}
	}

	for (let i = 0; i < len; i++) {
		if (nums[i] !== i + 1) {
			return i + 1
		}
	}

	return len + 1
};

const case1 = [3, 4, -1, 1]
const case2 = [1, 1, 1, 2]
console.log(firstMissingPositive(case1))
