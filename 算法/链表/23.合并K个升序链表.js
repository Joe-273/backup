/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
	const len = lists.length
	if (len === 0) {
		return null
	}
	if (len === 1) {
		return lists[0]
	}

	const mid = Math.floor(len / 2)
	const l1 = mergeKLists(lists.slice(0, mid))
	const l2 = mergeKLists(lists.slice(mid, len))
	return mergeTwoLists(l1, l2)
};

// 循环遍历合并法
function mergeTwoLists(l1, l2) {
	if (l1 === null) {
		return l2
	}
	if (l2 === null) {
		return l1
	}

	// 确定头节点
	let head
	if (l1.val <= l2.val) {
		head = l1
		l1 = l1.next
	} else {
		head = l2
		l2 = l2.next
	}
	// 循环排序
	const ans = head
	while (l1 !== null && l2 !== null) {
		if (l1.val <= l2.val) {
			head.next = l1
			l1 = l1.next
		} else {
			head.next = l2
			l2 = l2.next
		}
		head = head.next
	}
	head.next = l1 ?? l2
	return ans
}
// 递归合并法
// function mergeTwoLists(l1, l2) {
// 	if (l1 === null) {
// 		return l2
// 	}
// 	if (l2 === null) {
// 		return l1
// 	}
//
// 	let head
// 	if (l1.val <= l2.val) {
// 		head = l1
// 		head.next = mergeTwoLists(l1.next, l2)
// 	} else {
// 		head = l2
// 		head.next = mergeTwoLists(l1, l2.next)
// 	}
// 	return head
// }

