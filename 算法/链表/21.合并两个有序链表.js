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
const case1 = createList([1, 2, 4])
const case2 = createList([1, 3, 4])

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
	if (list1 === null) {
		return list2
	} else if (list2 === null) {
		return list1
	} else if (list1.val < list2.val) {
		list1.next = mergeTwoLists(list1.next, list2)
		return list1
	} else {
		list2.next = mergeTwoLists(list1, list2.next)
		return list2
	}
};
