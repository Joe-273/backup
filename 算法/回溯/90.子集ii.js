/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
	// 这类结果不能重复的题目，需要对输入数组进行排序
	// 也就是在同一个for循环内去重（树层去重），需要对输入数组进行排序
	// 使用pre变量去重
	// nums.sort((a, b) => a - b)
	// const ans = []
	// backtracking(0, [])
	// return ans
	// function backtracking(start, path) {
	// 	ans.push(Array.from(path))
	// 	let pre
	// 	for (let i = start; i < nums.length; i++) {
	// 		if (nums[i] === pre) {
	// 			continue
	// 		}
	// 		path.push(nums[i])
	// 		backtracking(i + 1, path)
	// 		path.pop()
	// 		pre = nums[i]
	// 	}
	// }

	// 通过used数组去重
	// nums.sort((a, b) => a - b)
	// const len = nums.length
	// const ans = [], used = new Array(len).fill(0)
	// backtracking(0, [], used)
	// return ans
	// function backtracking(start, path, used) {
	// 	ans.push(Array.from(path))
	// 	for (let i = start; i < len; i++) {
	// 		// 如果当前元素跟之前的元素相同了
	// 		if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === 0) {
	// 			continue
	// 		}
	// 		path.push(nums[i]), used[i] = 1
	// 		backtracking(i + 1, path, used)
	// 		path.pop(), used[i] = 0
	// 	}
	// }

	// 使用startIndex（start）去重
	nums.sort((a, b) => a - b)
	const ans = []
	backtracking(0, [])
	return ans
	function backtracking(start, path) {
		ans.push(Array.from(path))
		for (let i = start; i < nums.length; i++) {
			if (i > start && nums[i] === nums[i - 1]) {
				continue
			}
			path.push(nums[i])
			backtracking(i + 1, path)
			path.pop()
		}
	}
};

const c = [4, 4, 4, 1, 4]
console.log(subsetsWithDup(c))
