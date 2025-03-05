/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	// 题目要求：a+b+c==0
	// 从小到大排序原数组
	nums.sort((a, b) => a - b)
	const n = nums.length, ans = []
	// 固定a的值
	for (let i = 0; i < n - 2; i++) {
		// 如果最小的数都大于0 ，说明没有符合条件的元组
		if (nums[i] > 0) {
			break
		}
		// 因为三元组不能重复，所以对a去重
		// 三元组内的元素可以相同，但不能有相同组合的三元组
		// nums[i] === nums[i - 1] 这个判断条件满足这个要求
		// [0,0,0,0,0]，比如这个数组在这个判断条件下就可以选出(0,0,0)这个三元组
		// 而nums[i] === nums[i - 1]就不行
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue
		}
		// 查找b（nums[l]）和c（nums[r]）的值
		let l = i + 1, r = n - 1
		while (l < r) {
			if (nums[i] + nums[l] + nums[r] > 0) {
				r--
			} else if (nums[i] + nums[l] + nums[r] < 0) {
				l++
			} else {
				// 先收集结果
				ans.push([nums[i], nums[l], nums[r]])
				// 再对b，c去重
				do { l++ } while (l < r && nums[l] === nums[l - 1])
				do { r-- } while (l < r && nums[r] === nums[r + 1])
			}
		}
	}
	return ans
};

const case1 = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(case1))
