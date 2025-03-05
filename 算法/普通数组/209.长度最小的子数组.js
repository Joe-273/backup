/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
	// 滑动窗口
	// let sum = 0, ans = Infinity, l = 0
	// for (let r = 0; r < nums.length; r++) {
	// 	sum += nums[r]
	// 	while (sum >= target) {
	// 		ans = Math.min(ans, r - l + 1)
	// 		sum -= nums[l++]
	// 	}
	// }
	// return ans === Infinity ? 0 : ans

	let s = 0, f = 0, sum = 0, ans = Infinity
	while (f < nums.length) {
		sum += nums[f]
		while (sum >= target) {
			ans = Math.min(ans, f - s + 1)
			sum -= nums[s++]
		}
		f++
	}
	return ans === Infinity ? 0 : ans
};

const case1 = [7, [2, 3, 1, 1, 1, 2, 4, 3]]
console.log(minSubArrayLen(...case1))
