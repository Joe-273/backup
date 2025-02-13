/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	let cover = 0; // 当前能跳到的最远位置
	let steps = 0; // 跳跃次数
	let farest = 0; // 当前步骤能跳到的边界位置

	for (let i = 0; i < nums.length - 1; i++) {
		cover = Math.max(cover, i + nums[i]);

		if (i === farest) {
			farest = cover;
			steps++;
		}
	}

	return steps;
};

const case1 = [2, 3, 0, 1, 4]
const case2 = [1, 2]
console.log(jump(case1))
