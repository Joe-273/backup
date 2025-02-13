/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	const ans = [], len = nums.length
	backTracking([])
	return ans

	function backTracking(path) {
		if (path.length === len) {
			ans.push([...path])
			return
		}
		for (let i = 0; i < len; i++) {
			if (path.indexOf(nums[i]) === -1) {
				// 如果path中不存在nums[i]
				path.push(nums[i])
				// 递归
				backTracking(path)
				// 回溯
				path.pop()
			}
		}
	}
};

const case1 = [1, 2, 3]
console.log(permute(case1))
