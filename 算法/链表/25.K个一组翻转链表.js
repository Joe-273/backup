function ListNode(val, next) {
	this.val = val
	this.next = (next === undefined ? null : next)
}
function createList(arr) {
	const head = new ListNode()
	let curNode = head
	for (const val of arr) {
		if (curNode.val === undefined) {
			curNode.val = val
		} else {
			curNode.next = new ListNode(val)
			curNode = curNode.next
		}
	}
	return head
}
const case1 = [createList([1, 2, 3, 4, 5]), 3]
// 以上只是为了构建链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
	// 思路：因为按照k个一组进行翻转
	// 所以可以通过每一组的前一个元素(groupPre)，来获得：
	// 每一组的第一个元素(slow)
	// 通过移动(slow)可以得到每一组中的最后一个元素(fast)
	// 还有每一组的后一个元素(groupNxt)
	//
	// 然后倒置每一个组
	// 再将倒置后新的根节点和尾节点与groupPre和groupNxt链接起来
	const dummy = new ListNode(null, head)
	let groupPre = dummy, slow = groupPre.next

	while (slow) {
		let fast = slow
		// 如果后面的节点不足k个，则不需要翻转
		let index = 0
		while (fast && index < k - 1) {
			fast = fast.next
			index++
		}
		if (!fast) {
			break
		}

		const groupNxt = fast.next
		// 翻转子链表
		const [subHead, subTail] = reverse(slow, fast)
		groupPre.next = subHead
		// 更新groupPre和slow
		groupPre = subTail
		slow = groupNxt
	}

	return dummy.next
};

function reverse(head, tail) {
	let pre = tail.next
	let cur = head
	while (pre !== tail) {
		const next = cur.next
		cur.next = pre
		pre = cur
		cur = next
	}
	return [tail, head]
}

console.log(reverseKGroup(...case1))
