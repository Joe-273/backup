/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
	if (!head) { return head }

	const dummy = new ListNode(0, head)
	let nodeCount = 0

	let cur: ListNode | null = head
	while (cur) {
		cur = cur.next
		nodeCount++
	}

	let groupPre = dummy
	let pre: ListNode | null = null
	cur = head!
	while (nodeCount >= k) {
		nodeCount -= k
		for (let i = 0; i < k; i++) {
			const next = cur!.next
			cur!.next = pre
			pre = cur
			cur = next
		}
		const nextGrouPre = groupPre.next
		groupPre.next!.next = cur
		groupPre.next = pre
		groupPre = nextGrouPre!
	}

	return dummy.next
};
