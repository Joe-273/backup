// 力扣28题：找出字符串中第一个匹配项的下标

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	// KMP算法两部曲：
	// 1. 构建前缀表(next数组)
	// 2. 根据前缀表在文本串中搜索模式串
	// 构建next
	const m = haystack.length, n = needle.length
	const next = new Array(n).fill(0)
	// j代表的是最大相同前缀的下标
	for (let j = 0, i = 1; i < n; i++) {
		while (j > 0 && needle[j] !== needle[i]) {
			j = next[j - 1]
		}
		if (needle[j] === needle[i]) {
			j++
		}
		next[i] = j
	}
	// 搜索
	for (let i = 0, j = 0; i < m; i++) {
		// 匹配不上
		// 根据next数组，让j回退
		// 去到已经匹配过的位置重新匹配
		// (如果回退到0的位置仍匹配不上，说明以当前i开头，没有匹配的模式串)
		while (j > 0 && haystack[i] !== needle[j]) {
			j = next[j - 1]
		}
		// i和j匹配上了，进入下轮循环接着匹配下一个元素
		if (haystack[i] === needle[j]) {
			j++
		}
		// 如果最后一个元素也匹配上了，返回结果
		if (j === n) {
			return i - n + 1
		}
	}
	return -1
};

const c1 = ['aabaabaaf', 'aabaaf']
const c2 = ['ababcaababcaabc', 'ababcaabc']
console.log(strStr(...c2))
