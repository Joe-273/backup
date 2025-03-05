/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	// 思路；定义快慢指针，先让快指针移动n步
	// 然后快慢指针再同时移动，即可找到第前n个节点
	// 为了方便处理删除头节点的操作，使用加入虚拟头节点的方式
	const dummy = new ListNode(0, head)
	let s = dummy, f = dummy
	for (let i = 0; i < n; i++) {
		f = f.next
	}
	while (f.next) {
		f = f.next, s = s.next
	}
	s.next = s.next.next
	return dummy.next
};
