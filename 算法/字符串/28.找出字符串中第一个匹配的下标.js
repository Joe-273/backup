/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	// KMP算法
	const m = haystack.length, n = needle.length
	const next = new Array(n).fill(0)
	// 构建next
	for (let i = 1, j = 0; i < n; i++) {
		while (j > 0 && needle[i] !== needle[j]) { j = next[j - 1] }
		if (needle[i] === needle[j]) { j++ }
		next[i] = j
	}
	// 搜索
	for (let i = 0, j = 0; i < m; i++) {
		while (j > 0 && haystack[i] !== needle[j]) { j = next[j - 1] }
		if (haystack[i] === needle[j]) { j++ }
		if (j === n) { return i - n + 1 }
	}
	return -1

};

const c1 = ["sadbutsad", "sad"]
const c2 = ["leetcode", "leeto"]
console.log(strStr(...c2))
