/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
	// // 二分查找，时间复杂度O(nlogn)，空间复杂度O(1)
	// const n = nums.length - 1
	// let l = 1, r = n
	// // 由题得，数组的元素大小范围在[1, n]，所以结果的范围也在[1, n]
	// // 通过二分不断缩小重复数字的范围，直到找到重复数字
	// while (l <= r) {
	// 	if (l === r) { return l }
	// 	const mid = l + r >> 1
	// 	let count = 0
	// 	for (const num of nums) {
	// 		if (num <= mid) { count++ }
	// 	}
	// 	if (count <= mid) {
	// 		l = mid + 1
	// 	} else {
	// 		r = mid
	// 	}
	// }

	// 快慢指针
	// 因为元素的大小num在[1,n]内，所以nums[num]一定不会越界
	// 所以可以把数组中元素的值，看成链表的指向
	// [1, 3, 4, 2, 2]中，比如下标为1的元素3，可以看成指向nums[3]的元素
	// 将数组中的元素看作节点，通过元素的值作为下一个节点的下标
	// 可以得出一条模拟的链表：
	// 1 -> 3 -> 2 -> 4 ‾⎤
	//           ⏐       ⏐
	//           ⌊_______⌋
	// 
	// 所以可以看作是找链表环节点问题
	// 一个节点从相遇的元素开始移动，另一个从头开始移动
	// 他们最终会在环入口节点相遇
	// let s = nums[0], f = nums[0]
	// // 找到相遇节点
	// do {
	// 	s = nums[s], f = nums[nums[f]]
	// } while (s !== f);
	// // 找环的入口（重复元素）
	// f = nums[0]
	// while (s !== f) {
	// 	f = nums[f], s = nums[s]
	// }
	// return s

	// 因为可以看作有环链表
	// 所以每走到一个元素就标记一下
	// 当走到了标记过的元素，那么这个元素就是重复元素
	// 这里将走过的元素标记为负数
	let cur = 0
	do {
		if (nums[cur] < 0) { return cur }

		const next = nums[cur]
		nums[cur] = -nums[cur]
		cur = next
	} while (true);
};

const case1 = [1, 3, 4, 2, 2]
console.log(findDuplicate(case1))
