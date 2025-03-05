/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
	// 题目要求元组(a,b,c,d)四个元素的和sum==target
	// 从小到大排序原数组
	nums.sort((a, b) => a - b)
	const n = nums.length, ans = []
	// 固定a
	for (let i = 0; i < n - 3; i++) {
		// 剪枝
		// 1. 如果后三个数跟当前数的和大于target
		// 也就是四个最小值加起来比target大了，所以后续没有合适的四元组
		// 2. 如果 后三个数跟当前数的和小于了target
		// 说明了当前数太小了，所以直接进入下轮循环
		if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
		if (nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) continue
		// 对a去重
		if (i > 0 && nums[i] === nums[i - 1]) continue

		// 固定b
		for (let j = i + 1; j < n - 2; j++) {
			// 剪枝
			if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break
			if (nums[i] + nums[j] + nums[n - 1] + nums[n - 2] < target) continue
			// 对b去重
			if (j > i + 1 && nums[j] === nums[j - 1]) continue

			// 寻找c，d
			let l = j + 1, r = n - 1
			while (l < r) {
				const sum = nums[i] + nums[j] + nums[l] + nums[r]
				if (sum > target) {
					r--
				} else if (sum < target) {
					l++
				} else {
					ans.push([nums[i], nums[j], nums[l], nums[r]])
					// 对c，d去重
					do { l++ } while (l < r && nums[l] === nums[l - 1]);
					do { r-- } while (l < r && nums[r] === nums[r + 1]);
				}
			}
		}
	}

	return ans
};

const case1 = [[1, 0, -1, 0, -2, 2], 0]
console.log(fourSum(...case1))
