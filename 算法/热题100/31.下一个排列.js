/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
	// [1, 3, 5, 4, 2] -> [1, 4, 2, 3, 5]
	// 先从后往前找到第一个升序对的第一个一个下标
	// 明显找到的第一个升序对为[3, 5]，所以k=1, nums[k]=3
	// 再从后忘前找到第一个大于nums[k]的数，显然这个数是4，所以t=3,nums[t]=4
	// 交换k和t这两个元素，得到[1, 4, 5, 3, 2]
	// 并且[5, 3, 2] 为降序排列，将其反转为升序排列[2, 3, 5]
	// 即可得出下一个排列[1, 4, 2, 3, 5]
	// 特例：[5, 4, 3, 2, 1]，这个例子找不到升序对，所以k = -1
	// 直接反转整个数组

	const n = nums.length
	let k = n - 2
	while (k >= 0 && nums[k] >= nums[k + 1]) { k-- }
	let t = n - 1, l = k + 1, r = n - 1
	//如果找到了升序对
	if (k >= 0) {
		while (nums[k] >= nums[t]) { t-- }
		// 交换k, t
		swap(k, t)
	}
	// 反转[k+1..n-1]，如果没找到升序对，这里则是反转整个数组
	while (l <= r) { swap(l, r), l++, r-- }

	return nums

	function swap(a, b) {
		const t = nums[a]
		nums[a] = nums[b]
		nums[b] = t
	}
};

const case1 = [1, 3, 5, 4, 2]
const case2 = [1, 2, 3]
const case3 = [1, 1]
console.log(nextPermutation(case3))
