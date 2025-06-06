function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}
function createList(arr) {
	const head = new ListNode()
	let curNode = head
	for (const val of arr) {
		if (curNode.val === 0) {
			curNode.val = val
		} else {
			curNode.next = new ListNode(val)
			curNode = curNode.next
		}
	}
	return head
}
const case1 = createList([1, 2, 3, 4, 5])
const case2 = createList([])
// 以上只是为了构建链表

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	// 双指针法
	// let pre = null, cur = head
	// while (cur) {
	// 	const next = cur.next
	// 	cur.next = pre
	// 	pre = cur
	// 	cur = next
	// }
	// return pre

	// 递归法1
	return reverse(head, null)
	function reverse(cur, pre) {
		if (cur === null) {
			return pre
		}
		const next = cur.next
		cur.next = pre
		return reverse(next, cur)
	}

	// 递归法2
	// if (head === null || head.next === null) {
	// 	return head
	// }
	// const newHead = reverseList(head.next)
	// head.next.next = head
	// head.next = null
	// return newHead
};
console.log(reverseList(case1))
