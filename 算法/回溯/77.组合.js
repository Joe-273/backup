/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
	const ans = []
	backtracking(1, [])
	return ans

	function backtracking(start, path) {
		const len = path.length
		if (len === k) { return ans.push(Array.from(path)) }
		for (let i = start; i <= n - k + len + 1; i++) {
			path.push(i)
			backtracking(i + 1, path)
			path.pop()
		}
	}
};

const c = [4, 4]
console.log(combine(...c))
