/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
	const sLen = s.length
	const pLen = p.length
	const count = new Array(26).fill(0)
	const r = []

	if (p.length > s.length) {
		return r
	}

	// 初始化窗口
	for (let i = 0; i < pLen; i++) {
		// 现在这张表表示当前窗口中各个字母的个数
		count[s.charCodeAt(i) - 97]++
		// 减去 p 的各个字母的个数
		// 如果这张表所有字母个数为0
		// 表示当前窗口的字母和p相同，也就是p的字母异位词
		count[p.charCodeAt(i) - 97]--
	}

	// 判断初始窗口是否相等
	let differ = 0 // 用来表示当前窗口与p的差异数量
	for (let i = 0; i < 26; i++) {
		if (count[i] !== 0) {
			differ++
		}
	}
	if (differ === 0) {
		r.push(0)
	}

	for (let i = 0; i < sLen - pLen; i++) {
		// 滑动窗口
		// 左边滑出，也就是表中相应的字母减少
		const left = --count[s.charCodeAt(i) - 97]
		if (left === 0) {
			// 说明原来这个位置就是多了一个字母
			// 现在不多了
			differ--
		} else if (left === -1) {
			// 说明原来这个字母数量就刚好合适
			// 现在少了一个
			differ++
		}

		// 右边滑入
		const right = ++count[s.charCodeAt(i + pLen) - 97]
		if (right === 0) {
			// 表示原本差一个这个字母
			// 但滑入后正好加上了，原本差异减少1
			differ--
		} else if (right === 1) {
			// 表示原本这个字母数量刚刚好
			// 但滑入后多了，原本差异加1
			differ++
		}

		// 判断是否是字母异位词
		if (differ === 0) {
			r.push(i + 1)
		}
	}

	return r
};

const case1 = ["cbaebabacd", 'abc']
const case2 = ["abab", 'ab']
const case3 = ["baa", 'aa']
console.log(findAnagrams(...case3))
