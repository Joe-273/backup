// 如果已知有一个 x,x+1,x+2,⋯,x+y 的连续序列，
// 则找到 x 后,也就是找到整个数组中不存在 x-1 的数 , 再去计算其连续的最大长度
// 如果有多个这样的连续序列，只需要比较他们的序列长度即可

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
	const set = new Set()
	for (const num of nums) {
		set.add(num)
	}
	let longestStreak = 0
	set.forEach(i => {
		if (!set.has(i - 1)) {
			let currentNum = i
			let currentStreak = 1
			while (set.has(currentNum + 1)) {
				currentNum++
				currentStreak++
			}
			longestStreak = Math.max(longestStreak, currentStreak)
		}
	})
	return longestStreak
};

const nums1 = [100, 4, 200, 1, 3, 2]
const nums2 = [1, 2, 7, 2, 5, 8, 4, 6, 0, 1]
const nums3 = [1]
const nums4 = [0, -1]
const nums5 = [4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3]
console.log(longestConsecutive(nums1))
