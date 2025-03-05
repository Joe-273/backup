/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
	// 双指针
	// let pA = headA, pB = headB
	// // 如果没有相交点，那么pA跟pB相等的情况是pA == pB == null
	// while (pA !== pB) {
	// 	pA = pA === null ? headB : pA.next
	// 	pB = pB === null ? headA : pB.next
	// }
	// return pA

	// 哈希表
	const set = new Set()
	let pA = headA, pB = headB
	while (pA) {
		set.add(pA)
		pA = pA.next
	}
	while (pB) {
		if (set.has(pB)) { return pB }
		pB = pB.next
	}
	return null
};
