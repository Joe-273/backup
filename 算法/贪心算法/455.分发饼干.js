/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
	// 贪心
	// 用最大的饼干去尽量投喂胃口大的小孩
	g.sort((a, b) => a - b)
	s.sort((a, b) => a - b)
	let ans = 0
	let pointS = s.length - 1
	for (let i = g.length - 1; i >= 0; i--) {
		if (pointS >= 0 && s[pointS] >= g[i]) {
			ans++, pointS--
		}
	}
	return ans

	// 双指针
	// g.sort((a, b) => a - b), s.sort((a, b) => a - b)
	// const sLen = s.length, gLen = g.length
	// let pointG = 0, pointS = 0, ans = 0
	// while (pointG < gLen && pointS < sLen) {
	// 	if (s[pointS] < g[pointG]) {
	// 		pointS++
	// 		continue
	// 	}
	// 	ans++, pointG++, pointS++
	// }
	// return ans
};

console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]))
