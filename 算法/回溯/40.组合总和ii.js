/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	// 通过pre变量去重
	// candidates.sort((a, b) => a - b)
	// const ans = []
	// backtracking(0, [], 0)
	// return ans
	//
	// function backtracking(start, path, sum) {
	// 	if (sum === target) { return ans.push(Array.from(path)) }
	// 	let pre // 标记当前树层上一轮的元素，用于树层去重
	// 	for (let i = start; i < candidates.length; i++) {
	// 		const cur = candidates[i]
	// 		if (cur === pre) { continue }
	// 		if (sum + cur > target) { return }
	// 		path.push(cur)
	// 		backtracking(i + 1, path, sum + cur)
	// 		path.pop()
	// 		pre = cur
	// 	}
	// }

	// 通过used数组去重
	// candidates.sort((a, b) => a - b)
	// const len = candidates.length
	// const ans = [], used = new Array(len).fill(0)
	// backtracking(0, [], used, 0)
	// return ans
	//
	// function backtracking(start, path, used, sum) {
	// 	if (sum === target) { return ans.push(Array.from(path)) }
	// 	for (let i = start; i < len; i++) {
	// 		const cur = candidates[i]
	// 		if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === 0) {
	// 			continue
	// 		}
	// 		// 因为排好序了，所以如果sum加上当前数大了
	// 		// 那么sum加上后面任何树都大与target，直接结束
	// 		if (sum + cur > target) { return }
	// 		path.push(cur), used[i] = 1
	// 		backtracking(i + 1, path, used, sum + cur)
	// 		path.pop(), used[i] = 0
	// 	}
	// }

	// 通过startIndex（start）去重
	candidates.sort((a, b) => a - b)
	const len = candidates.length
	const ans = []
	backtracking(0, [], 0)
	return ans

	function backtracking(start, path, sum) {
		if (sum === target) { return ans.push(Array.from(path)) }
		for (let i = start; i < len; i++) {
			const cur = candidates[i]
			// i > start 表示当前for循环已经执行过一轮了
			// 下一轮开始的值如果跟上一轮的值相同就可以跳过了
			// 也就是树层去重
			if (i > start && candidates[i] === candidates[i - 1]) {
				continue
			}
			if (sum + cur > target) { return }
			path.push(cur)
			backtracking(i + 1, path, sum + cur)
			path.pop()
		}
	}
};

const c = [[10, 1, 2, 7, 6, 1, 5], 8]
console.log(combinationSum2(...c))
