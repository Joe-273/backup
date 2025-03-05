/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
	// 使用原地算法解答：
	// 解题思路：
	// 1. 移除多余空格 : "the sky is blue"
	// 2. 字符串反转："eulb si yks eht"
	// 3. 单词反转："blue is sky the"
	s = Array.from(s)
	// 移除多余空格
	let slow = 0, len = s.length
	for (let fast = 0; fast < len; fast++) {
		if (s[fast] !== ' ') {
			// 除第一个单词外
			// 在每个单词前面添加空格
			if (slow !== 0) {
				s[slow++] = ' '
			}
			while (fast < len && s[fast] !== ' ') {
				s[slow++] = s[fast++]
			}
		}
	}
	// 截断数组
	len = s.length = slow
	// 字符串反转
	let l = 0, r = len - 1
	do {
		const tmp = s[l]
		s[l] = s[r]
		s[r] = tmp
	} while (++l < --r)
	// 单词反转
	let start = 0
	for (let i = 0; i <= len; i++) {
		if (s[i] === ' ' || i === len) {
			let l = start, r = i - 1
			do {
				const tmp = s[l]
				s[l] = s[r]
				s[r] = tmp
			} while (++l < --r)
			start = i + 1
		}
	}
	return s.join('')
};

const c = "  the    sky   is   blue "
console.log(reverseWords(c))
