function eraseOverlapIntervals(intervals: number[][]): number {
	// 贪心，删除覆盖范围较大的区间，保留覆盖范围较小的区间
	intervals.sort((a, b) => a[1] - b[1])

	let ans = 0, end = intervals[0][1]
	for (let i = 1; i < intervals.length; i++) {
		if (intervals[i][0] < end) {
			ans++
		} else {
			end = intervals[i][1]
		}
	}
	return ans
};

console.log(eraseOverlapIntervals([[-52, 31], [-73, -26], [82, 97], [-65, -11], [-62, -49], [95, 99], [58, 95], [-31, 49], [66, 98], [-63, 2], [30, 47], [-40, -26]]));

