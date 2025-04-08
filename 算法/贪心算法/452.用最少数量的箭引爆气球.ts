function findMinArrowShots(points: number[][]): number {
	const len = points.length
	points.sort((a, b) => a[0] - b[0])

	// 最多就是每一个气球都需要一箭
	// cur 表示这一箭的范围
	// end 表示这一箭的边界
	let ans = len, cur = points[0], end = cur[1]
	for (let i = 1; i < len; i++) {
		if (points[i][0] <= end) {
			// 如果在范围内，更新边界
			end = Math.min(points[i][1], end)
			ans--
		} else {
			cur = points[i]
			end = cur[1]
		}
	}
	return ans
};

console.log(findMinArrowShots([[3, 9], [7, 12], [3, 8], [6, 8], [9, 10], [2, 9], [0, 9], [3, 9], [0, 6], [2, 8]]));
