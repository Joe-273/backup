/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	const ans = [], len = nums.length, set = new Set()
	backtracking([])
	return ans

	function backtracking(path) {
		if (path.length === len) { return ans.push(Array.from(path)) }
		for (let i = 0; i < len; i++) {
			const cur = nums[i]
			if (!set.has(cur)) {
				path.push(cur), set.add(cur)
				backtracking(path)
				path.pop(), set.delete(cur)
			}
		}
	}
};

const case1 = [1, 2, 3]
const case2 = [0, 1]
console.log(permute(case2))
