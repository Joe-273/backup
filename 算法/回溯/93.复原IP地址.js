/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
	// 究极无敌超暴力回溯搜索
	const ans = [], len = s.length
	backtracking(0, [])
	return ans
	function backtracking(start, path) {
		if (start === len && path.length === 4) { return ans.push(path.join('.')) }
		// 剪枝
		if (start !== len && path.length === 4) { return }
		for (let i = start; i < len; i++) {
			const num = s.substring(start, i + 1)
			// 不能以0开头，如果是直接结束循环
			if (num.length > 1 && num[0] === '0') { break }
			if (+num > 255) { break }
			path.push(num)
			backtracking(i + 1, path)
			path.pop()
		}
	}
	// 其他思路：
	// 1. 动态规划+回溯
	// 2. 使用'.'的数量决定收集的时机
};

const c = '101023'
console.log(restoreIpAddresses(c))
