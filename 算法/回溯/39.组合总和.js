/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	candidates.sort((a, b) => a - b)
	const ans = []
	backtracking(0, [], 0)
	return ans

	function backtracking(start, path, sum) {
		if (sum === target) { return ans.push(Array.from(path)) }
		for (let i = start; i < candidates.length; i++) {
			const num = candidates[i]
			if (num + sum > target) { return }
			path.push(num)
			backtracking(i, path, sum + num)
			path.pop()
		}
	}
};

const case1 = [[2, 3, 6, 7], 7]
console.log(combinationSum(...case1))
