export class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

function oddEvenList(head: ListNode | null): ListNode | null {
	if (!head || !head.next) { return head }

	let odd: ListNode = head
	let eve: ListNode | null = head.next
	let eveHead = eve

	while (eve && eve.next) {
		odd.next = eve.next
		odd = odd.next
		eve.next = odd.next
		eve = eve.next
	}
	odd.next = eveHead

	return head
};
