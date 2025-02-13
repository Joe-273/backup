/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	let carry = 0
	let head = new ListNode()
	let root = head
	while (l1 || l2) {
		const l1Val = l1.val || 0
		const l2Val = l2.val || 0
		const sum = l1Val + l2Val + carry
		carry = sum >= 10 ? 1 : 0
		head.next = new ListNode(sum % 10)
		head = head.next
		l1 = l1.next || 0
		l2 = l2.next || 0
	}
	if (carry === 1) {
		head.next = new ListNode(1)
	}
	return root.next
};

