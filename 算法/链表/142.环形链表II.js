// 最简单的是使用哈希表
// 但题目要一个空间复杂度为O(1)的方法，并且不能够修改原链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
	let fast = head, slow = head
	while (fast && fast.next) {
		fast = fast.next.next
		slow = slow.next
		if (fast === slow) {
			// 相遇点
			let start = head
			while (start !== slow) {
				start = start.next
				slow = slow.next
			}
			return start
		}
	}
	return null
};
