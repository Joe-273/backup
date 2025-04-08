function partitionLabels(s: string): number[] {
	const chars = s.split('')
	const endPosMap = new Map()
	chars.forEach((char, index) => endPosMap.set(char, index));
	let ans: number[] = []
	let start = -1, end = 0
	for (let i = 0; i < chars.length; i++) {
		end = Math.max(endPosMap.get(chars[i]), end)
		if (i === end) {
			ans.push(end - start)
			start = end
		}
	}
	return ans
};
