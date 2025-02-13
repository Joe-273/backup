/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
	// // dp[i][j]含义：[i,j]是不是回文子串
	// s = s.split('')
	// const length = s.length
	// const dp = Array.from({ length }, () => new Array(length).fill(false))
	// let ans = 0
	// for (let i = length - 1; i >= 0; i--) {
	// 	for (let j = i; j < length; j++) {
	// 		if (s[i] === s[j]) {
	// 			if (j - i <= 1) {
	// 				dp[i][j] = true
	// 				ans++
	// 			} else if (dp[i + 1][j - 1]) {
	// 				dp[i][j] = true
	// 				ans++
	// 			}
	// 		}
	// 	}
	// 	// console.log(dp)
	// }
	// return ans

	// 状态压缩
	s = s.split('')
	const length = s.length
	const dp = new Array(length).fill(false)
	let ans = 0
	for (let i = length - 1; i >= 0; i--) {
		for (let j = length - 1; j >= i; j--) {
			// 使用滚动数组需要覆盖数据
			if (s[i] === s[j]) {
				if (j - i <= 1) {
					dp[j] = true
					ans++
				} else if (dp[j - 1]) {
					dp[j] = true
					ans++
				} else {
					dp[j] = false
				}
			} else {
				dp[j] = false
			}
		}
	}
	return ans
}

const case1 = 'abc'
const case2 = "fdsklf"
const case3 = "aaa"
console.log(countSubstrings(case2))
