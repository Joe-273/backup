/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
	// 思路：
	// 列举出nums1和nums2中各个元素的和，假设将这些和放入A这个容器中
	// 再列举出nums3和nums4的和，假设放入B容器中
	// 找出A中的和跟B中的和相加为0的情况
	const map = new Map()
	for (let i = 0; i < nums1.length; i++) {
		for (let j = 0; j < nums2.length; j++) {
			const sum = nums1[i] + nums2[j]
			map.set(sum, (map.get(sum) || 0) + 1)
		}
	}

	let ans = 0
	for (let k = 0; k < nums3.length; k++) {
		for (let l = 0; l < nums4.length; l++) {
			const sum = nums3[k] + nums4[l]
			ans += map.get(0 - sum) || 0
		}
	}

	return ans
};

const case1 = [[1, 2], [-2, -1], [-1, 2], [0, 2]]
console.log(fourSumCount(...case1))
