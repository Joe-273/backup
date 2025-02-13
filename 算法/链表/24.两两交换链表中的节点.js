/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
	const dummyHead = new ListNode()
	dummyHead.next = head
	let tempHead = dummyHead
	let p1 = tempHead.next, p2 = p1?.next
	while (p2) {
		const temp = p2.next
		p1.next = temp
		p2.next = p1
		tempHead.next = p2
		tempHead = p1

		p1 = tempHead.next
		p2 = p1?.next
	}
	return dummyHead.next
};
