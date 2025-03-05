/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	// Set 1.
	// const set = new Set(nums1), ans = new Set()
	// for (let i = 0; i < nums2.length; i++) {
	// 	set.has(nums2[i]) && ans.add(nums2[i])
	// }
	// return [...ans]

	// Set 2.
	const set = new Set(nums1)
	nums2 = Array.from(new Set(nums2))
	ans = nums2.filter(i => set.has(i))
	return ans

	// 因为元素大小为[0,1000]
	// 可以使用数组作为哈希表
	// const hash = new Array(1001).fill(0), ans = []
	// for (let i = 0; i < nums1.length; i++) {
	// 	hash[nums1[i]] = 1
	// }
	// for (let i = 0; i < nums2.length; i++) {
	// 	if (hash[nums2[i]]-- === 1) {
	// 		ans.push(nums2[i])
	// 	}
	// }
	// return ans
};

const case1 = [[1, 2, 2, 1], [2, 2]]
console.log(intersection(...case1))
