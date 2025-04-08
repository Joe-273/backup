export class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

export class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.left = (left === undefined ? null : left)
		this.right = (right === undefined ? null : right)
	}
}

function sortedListToBST(head: ListNode | null): TreeNode | null {
	// 直接操作链表生成二叉树
	// if (!head) { return null }
	// if (!head.next) { return new TreeNode(head.val) }
	//
	// const midNode = getMidNode(head)
	// const root = new TreeNode(midNode.val)
	// root.left = sortedListToBST(head)
	// root.right = sortedListToBST(midNode.next)
	// return root
	//
	// function getMidNode(head: ListNode) {
	// 	let slow: ListNode = head
	// 	let fast: ListNode | null = head
	// 	let pre: ListNode | null = null
	// 	while (fast && fast.next) {
	// 		pre = slow
	// 		slow = slow.next!
	// 		fast = fast.next.next
	// 	}
	// 	if (pre) { pre.next = null }
	// 	return slow
	// }

	// 将链表转为数组再生成二叉树
	const arrFromList: number[] = []
	while (head) {
		arrFromList.push(head.val)
		head = head.next
	}
	if (!arrFromList.length) {
		return null
	}
	return recurse(0, arrFromList.length - 1)

	function recurse(l: number, r: number) {
		if (l > r) {
			return null
		}
		const mid = (l + r) >>> 1
		const root = new TreeNode(arrFromList[mid])
		root.left = recurse(0, mid - 1)
		root.right = recurse(mid + 1, arrFromList.length - 1)
		return root
	}
};
