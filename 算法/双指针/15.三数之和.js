// 固定第一个数后，以下就是两数之和的思路
// 既可以使用双指针，也可以使用哈希表
// 但双指针由于不需要使用哈希表来存储数组
// 所以其空间复杂度更优

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	nums.sort((a, b) => a - b)
	const r = []
	for (let i = 0; i < nums.length; i++) {
		// 从第二次开始去重复
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue
		}

		if (nums[i] > 0) {
			return r
		}

		const twoSum = -nums[i]

		let left = i + 1
		let right = nums.length - 1
		while (left < right) {
			const sum = nums[left] + nums[right]
			if (sum === twoSum) {
				r.push([nums[i], nums[left], nums[right]])
				left++
				right--
				// 指针跳跃，跳过相同元素
				while (left < right && nums[left] === nums[left - 1]) { left++ }
				while (left < right && nums[right] === nums[right + 1]) { right-- }
			} else if (sum < twoSum) {
				left++
			} else {
				right--
			}
		}
	}
	return r
};

const case1 = [-1, 0, 1, 2, -1, -4]
const case2 = [0, 1, 1]
const case3 = [0, 0, 0, 0, 0, 0, 0, 0]
const case4 = [-2, 0, 1, 1, 2]
console.log(threeSum(case4))

