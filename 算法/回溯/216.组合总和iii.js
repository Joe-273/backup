/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
	const ans = []
	backtracking(1, [], 0)
	return ans

	function backtracking(start, path, sum) {
		const len = path.length
		if (len === k) {
			if (sum === n) { ans.push(Array.from(path)) }
			return
		}
		for (let i = start; i <= 9 && sum + i <= n; i++) {
			path.push(i)
			backtracking(i + 1, path, sum + i)
			path.pop()
		}
	}
};

const c = [3, 7]
console.log(combinationSum3(...c))
