function merge(intervals: number[][]): number[][] {
	intervals.sort((a, b) => a[0] - b[0])
	let cur = intervals[0]
	const ans: number[][] = [cur]
	for (let i = 1; i < intervals.length; i++) {
		if (intervals[i][0] > cur[1]) {
			cur = intervals[i]
			ans.push(cur)
		} else {
			cur[1] = Math.max(intervals[i][1], cur[1])
		}
	}
	return ans
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));

