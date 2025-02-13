/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
	// 迭代写法
	// let ans = '', multi = 0
	// const stack = []
	// for (const str of s) {
	// 	if ('0' <= str && str <= '9') {
	// 		// 如果是数字
	// 		multi = multi * 10 + +str
	// 	} else if (str === '[') {
	// 		stack.push([ans, multi])
	// 		ans = ''
	// 		multi = 0
	// 	} else if (str === ']') {
	// 		const [lastStr, curMulti] = stack.pop()
	// 		ans = lastStr + ans.repeat(curMulti)
	// 	} else {
	// 		ans += str
	// 	}
	// }
	// return ans

	// 递归写法
	const len = s.length
	let curIndex = 0
	return recursive()

	function recursive() {
		let res = '', multi = 0
		while (curIndex < len) {
			const str = s[curIndex]
			curIndex += 1

			if ('0' <= str && str <= '9') {
				// 如果是数字
				multi = multi * 10 + +str
			} else if (str === '[') {
				res += recursive().repeat(multi)
				multi = 0
			} else if (str === ']') {
				return res
			} else {
				res += str
			}
		}

		return res
	}
};

const case1 = "3[a2[c]]"
const case2 = '2[abc]3[cd]ef'
console.log(decodeString(case2))
