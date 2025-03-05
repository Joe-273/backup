/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const map = new Map()
	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i]
		if (map.has(diff)) return [map.get(diff), i]
		map.set(nums[i], i)
	}
};

const case1 = [[2, 3, 4], 6]
const case2 = [[2, 7, 11, 15], 9]
const case3 = [[3, 3], 6]
console.log(twoSum(...case1))
