/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 方法一，for循环配合递归
var subsets = function(nums) {
	const ans = []
	backTracking([], 0)
	return ans

	function backTracking(path, startIndex) {
		ans.push([...path])

		// for 循环结束，递归开始回溯
		for (let i = startIndex; i < nums.length; i++) {
			path.push(nums[i])
			backTracking(path, i + 1)
			path.pop()
		}
	}
};

const case1 = [1, 2, 3]
console.log(subsets(case1))
