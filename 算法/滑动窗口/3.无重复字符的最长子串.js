// 旧版本
// 因为需要使用indexOf遍历字符串，所以时间复杂度为O(n^2)
/**
 * @param {string} s
 * @return {number}
 */
var _lengthOfLongestSubstring = function(s) {
	const strs = Array.from(s)
	let subStr = ''
	let max = 0
	for (let i = 0; i < strs.length; i++) {
		const curChar = strs[i]
		const curCharIndex = subStr.indexOf(curChar)
		if (curCharIndex === -1) {
			subStr += curChar
			max = Math.max(max, subStr.length)
		} else {
			subStr = subStr.substring(curCharIndex + 1) + curChar
		}
	}
	return max
};

// 哈希表版本
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	const map = new Map()
	let left = 0
	let max = 0
	for (let i = 0; i < s.length; i++) {
		const curChar = s[i];
		if (map.has(curChar)) {
			left = Math.max(map.get(curChar) + 1, left)
		}
		max = Math.max(max, i + 1 - left)
		map.set(curChar, i)
	}
	return max
};

const case1 = "abcabcbb"
const case2 = "bbbbb"
const case3 = "aabaab!bb"
const case4 = "dvdf"
const case5 = " "

console.log(lengthOfLongestSubstring(case5))
