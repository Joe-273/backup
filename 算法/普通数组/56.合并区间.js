/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	intervals.sort((a, b) => a[0] - b[0])
	const ans = []
	let cur = intervals[0]
	for (let i = 1; i < intervals.length; i++) {
		const tar = intervals[i]
		if (tar[0] > cur[1]) {
			ans.push(cur)
			cur = tar
		} else {
			cur[1] = Math.max(tar[1], cur[1])
		}
	}
	ans.push(cur)
	return ans
};

const case1 = [[1, 3], [2, 6], [8, 10], [15, 18]]
const case2 = [[1, 4], [0, 4]]
console.log(merge(case1))

