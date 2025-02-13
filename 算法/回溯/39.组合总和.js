/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	const ans = []
	backTracking([], 0, 0)
	return ans

	function backTracking(combine, sum, startIndex) {
		if (sum > target) {
			return
		}
		if (sum === target) {
			ans.push(combine.slice())
			return
		}

		// 为了避免重复的组合
		// 使用第一层for循环的下标来控制startIndex
		for (let i = startIndex; i < candidates.length; i++) {
			combine.push(candidates[i])
			backTracking(combine, sum + candidates[i], i)
			combine.pop()
		}
	}
};

const case1 = [[2, 3, 6, 7], 7]
console.log(combinationSum(...case1))
