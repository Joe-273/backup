function addStrings(num1: string, num2: string): string {
	let m = num1.length - 1, n = num2.length - 1
	let bit = 0
	const result: number[] = []
	while (m >= 0 || n >= 0 || bit !== 0) {
		const curNum1 = m >= 0 ? +num1[m--] : 0
		const curNum2 = n >= 0 ? +num2[n--] : 0
		const curSum = curNum1 + curNum2 + bit
		// 使用多次push()，然后再使用一次reverse()进行反转的效率，
		// 比使用多次unshift()的效率要高很多，这在数组越长时越明显。
		result.push(curSum % 10)
		bit = curSum >= 10 ? 1 : 0
	}
	return result.reverse().join('')
};
