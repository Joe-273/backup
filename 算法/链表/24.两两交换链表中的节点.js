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
	const dummy = new ListNode(0, head)
	// 因为只交换双数的节点
	// 如果多出来一个就不交换了
	let cur = dummy
	while (cur.next !== null && cur.next.next !== null) {
		// cur      p1       p2
		//  ↓       ↓         ↓
		// dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> ...
		const p1 = cur.next, p2 = cur.next.next.next
		// 交换
		cur.next = cur.next.next
		cur.next.next = p1
		p1.next = p2
		// 更新
		cur = p1
	}
	return dummy.next
};
