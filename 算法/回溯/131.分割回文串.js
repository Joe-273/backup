/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
	const ans = [], len = s.length
	// 用于表示两个下标位置分割出来的子数组是否是回文串
	const memo = new Array(len)
	for (let i = 0; i < memo.length; i++) {
		// false 表示不是回文串或者没有判断过
		memo[i] = new Array(len).fill(false)
	}
	backTracking([], 0)
	return ans

	function backTracking(path, startIdx) {
		if (startIdx === len) {
			ans.push(path.slice())
			return
		}

		for (let i = startIdx; i < len; i++) {
			if (isPalindrome(startIdx, i)) {
				// 剪枝，如果是回文串才进行递归
				path.push(s.substring(startIdx, i + 1))
				backTracking(path, i + 1)
				// 回溯
				path.pop()
			}
		}
	}
	// 记忆化搜索法
	function isPalindrome(l, r) {
		if (l >= r || memo[l][r]) {
			return true
		}

		let res
		if (l < r && s[l] === s[r]) {
			res = isPalindrome(l + 1, r - 1)
		} else {
			res = false
		}

		if (res) {
			memo[l][r] = res
		}
		return res
	}
};

const case1 = 'aabb'
console.log(partition(case1))
