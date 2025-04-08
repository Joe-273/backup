function _addStrings(num1: string, num2: string): string {
	const ans: number[] = []
	let m = num1.length - 1, n = num2.length - 1
	let carry = 0
	while (m >= 0 || n >= 0 || carry) {
		const mNum = m >= 0 ? +num1[m] : 0
		const nNum = n >= 0 ? +num2[n] : 0
		const curSum = mNum + nNum + carry
		ans.push(curSum % 10)
		carry = Math.floor(curSum / 10)
		m--, n--
	}
	return ans.reverse().join('')
};

console.log(_addStrings("584", "18"));

