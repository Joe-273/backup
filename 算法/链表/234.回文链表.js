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
const case1 = createList([1, 2, 2, 1])
const case2 = createList([1, 2])
const case3 = createList([])
// 以上只是为了构建链表

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	const stack = []
	let curHead = head
	while (curHead !== null) {
		stack.push(curHead.val)
		curHead = curHead.next
	}

	let left = 0
	let right = stack.length - 1
	while (left <= right) {
		if (stack[left] !== stack[right]) {
			return false
		}
		left++
		right--
	}
	return true
};
console.log(isPalindrome(case3))
