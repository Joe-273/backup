/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	// 方法一：找第k大的数，时间复杂度O(log(m+n))
	// const len = nums1.length + nums2.length
	// if (len % 2 === 0) {
	// 	// 如果总长度为偶数
	// 	const l = find(nums1, 0, nums2, 0, len / 2)
	// 	const r = find(nums1, 0, nums2, 0, len / 2 + 1)
	// 	return (l + r) / 2
	// } else {
	// 	// 如果总长度为奇数
	// 	return find(nums1, 0, nums2, 0, (len + 1) / 2)
	// }
	// function find(nums1, i, nums2, j, k) {
	// 	// 保证第一个数组1的使用长度总是比较小的一个
	// 	if (nums1.length - i > nums2.length - j) {
	// 		return find(nums2, j, nums1, i, k)
	// 	}
	// 	// 如果较小数组数使用长度为0时，第k大的数在另一个数组中
	// 	if (nums1.length === i) {
	// 		return nums2[j + k - 1]
	// 	}
	// 	// 当k为1时，表示寻找第一大的数，也就是最小值
	// 	if (k === 1) {
	// 		return Math.min(nums1[i], nums2[j])
	// 	}
	// 	// 获取k/2，当k/2大于第一个数组的使用长度时
	// 	// 取数组较短的使用长度
	// 	const halfK = Math.min(nums1.length - i, Math.floor(k / 2))
	// 	const index1 = i + halfK - 1
	// 	const index2 = j + k - halfK - 1
	// 	if (nums1[index1] < nums2[index2]) {
	// 		// 舍去nums1中较小的部分
	// 		return find(nums1, index1 + 1, nums2, j, k - halfK)
	// 	} else {
	// 		// 舍去nums2中较小的部分
	// 		return find(nums1, i, nums2, index2 + 1, k - (k - halfK))
	// 	}
	// }
	// 方法二：划分数组法，时间复杂度O(log(min(m,n)))
	// 首先保证第一个数组长度小于第二个数组
	const len1 = nums1.length, len2 = nums2.length
	if (len1 > len2) {
		return findMedianSortedArrays(nums2, nums1)
	}
	// 分割线左边总数，总数为奇数时比右边多一个，偶数时左右相等
	const totalLeft = Math.floor((len1 + len2 + 1) / 2)

	let l = -1, r = len1
	while (l + 1 !== r) {
		const numL1 = Math.floor((l + r) / 2), numL2 = totalLeft - numL1
		if (nums1[numL1] < nums2[numL2 - 1]) {
			l = numL1
		} else {
			r = numL1
		}
	}

	const l1 = l, r1 = r, l2 = totalLeft - r - 1, r2 = l2 + 1
	const maxL1 = l1 === -1 ? -Infinity : nums1[l1]
	const minR1 = r1 === len1 ? Infinity : nums1[r1]
	const maxL2 = l2 === -1 ? -Infinity : nums2[l2]
	const minR2 = r2 === len2 ? Infinity : nums2[r2]

	if ((len1 + len2) % 2 === 0) {
		return (Math.min(minR1, minR2) + Math.max(maxL1, maxL2)) / 2
	} else {
		return Math.max(maxL1, maxL2)
	}
};

const case1 = [[1, 2], [3, 4]]
const case2 = [[0, 0], [0, 0]]
const case3 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]]
const case4 = [[2, 2, 4, 4], [2, 2, 2, 4, 4]]
console.log(findMedianSortedArrays(...case4))
