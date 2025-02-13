/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
	// need表用于储存目标字母以及其出现的次数
	// count表用于储存窗口中的目标字母以及其出现的次数
	const need = new Map(), count = new Map()
	for (let i = 0; i < t.length; i++) {
		if (need.has(t[i])) {
			need.set(t[i], need.get(t[i]) + 1)
		} else {
			need.set(t[i], 1)
		}
	}

	// 定义两个指针，快慢指针
	let left = 0, right = 0
	// 记录窗口中匹配上的字母的数量
	// 比如目标字母A有两个，那么窗口中也必须有两个A才算匹配上字母A
	let match = 0
	// 记录字串的开始位置，以及长度
	let start = 0, length = Infinity
	while (s[right]) {
		// 扩展窗口
		const rChar = s[right]
		right++

		if (need.has(rChar)) {
			// 如果右指针所指的字符在need表中
			// count表中相应字符数量增加，如果没有就设置为1
			if (count.has(rChar)) {
				count.set(rChar, count.get(rChar) + 1)
			} else {
				count.set(rChar, 1)
			}

			// 如果count表中的当前字母数量跟need表中相同
			// 说明当前字母在当前窗口中匹配上了
			if (count.get(rChar) === need.get(rChar)) {
				match++
			}
		}

		// 字串中匹配上了need表中的所有字母，收缩窗口
		while (match === need.size) {
			const lChar = s[left]
			// 如果当前子串的长度小于之前保存的length
			// 更新子串的开头位置和长度
			if (right - left < length) {
				start = left
				length = right - left
			}

			// 如果当前字母（左指针所指）跟need表中的相应字母匹配上了
			// 就取消当前字母的匹配，
			// 因为左指针会再向左移动，这个字母会滑出窗口
			if (need.has(lChar)) {
				if (count.get(lChar) === need.get(lChar)) {
					match--
				}

				if (count.has(lChar)) {
					count.set(lChar, count.get(lChar) - 1)
				} else {
					count.set(lChar, 1)
				}
			}
			left++
		}
	}
	// 如果一直没有出现匹配的字串
	// length 则不会被更新，也就会一直为Infinity
	if (length === Infinity) {
		return ''
	}
	return s.substring(start, start + length)
};

const case1 = ["ADOBECODEBAAC", 'AABC']
console.log(minWindow(...case1))
