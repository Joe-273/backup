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
var sortList = function(head) {
	// 递归出口
	if (head === null || head.next === null) {
		return head
	}

	let slow = head, fast = head.next

	// 快慢指针，二分链表
	while (fast !== null && fast.next !== null) {
		slow = slow.next
		fast = fast.next.next
	}

	let right = slow.next
	slow.next = null

	// 递归排序左右链表
	let l = sortList(head)
	let r = sortList(right)

	let ans = root = new ListNode()
	// 合并链表
	while (l !== null && r !== null) {
		if (l.val < r.val) {
			root.next = l
			l = l.next
		} else {
			root.next = r
			r = r.next
		}
		root = root.next
	}
	root.next = l ?? r

	return ans.next
};

