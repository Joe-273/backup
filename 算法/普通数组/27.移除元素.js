/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	// 头尾指针，不保证数组顺组
	const n = nums.length
	let l = 0, r = n - 1
	while (l <= r) {
		if (nums[l] === val) {
			nums[l] = nums[r--]
		} else {
			l++
		}
	}
	return l

	// 快慢指针，保证数组顺序
	// let s = 0
	// for (let f = 0; f < nums.length; f++) {
	// 	if (nums[f] !== val) {
	// 		nums[s++] = nums[f]
	// 	}
	// }
	// return s
};

const case1 = [[3, 2, 2, 3], 3]
const case2 = [[0, 1, 2, 2, 3, 0, 4, 2], 2]
console.log(removeElement(...case2))
