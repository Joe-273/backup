export class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
	const dummy: ListNode = new ListNode(0, head)
	let groupPre: ListNode = dummy
	for (let i = 0; i < left - 1; i++) {
		groupPre = groupPre.next!
	}
	let pre: ListNode | null = null
	let cur: ListNode = groupPre.next!
	for (let i = 0; i < right - left + 1; i++) {
		const next = cur.next!
		cur.next = pre
		pre = cur
		cur = next
	}
	groupPre.next!.next = cur
	groupPre.next = pre
	return dummy.next
};
