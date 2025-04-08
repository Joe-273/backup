/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	// 贪心，贪 每次跳跃能覆盖的最大范围
	// 记录覆盖范围大道最后一个下标时的步数
	// 因为题目说一定可以达到终点
	// 所以只要覆盖范围超过了nums.length - 1
	// 说明这一步一定能到最后一步，可以到终点
	const len = nums.length
	let ans = 0, cover = 0, farest = 0
	for (let i = 0; i < len - 1; i++) {
		cover = Math.max(cover, i + nums[i])
		// 走到了这一步的最大的覆盖范围
		if (i === farest) {
			// 说明要走下一步了，要更新最大覆盖范围
			farest = cover, ans++
		}
	}
	return ans
};

const case1 = [2, 5, 0, 1, 4]
const case2 = [1, 2]
console.log(jump(case1))
