function ListNode(val) {
	this.val = val;
	this.next = null;
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
function linkToEnd(head, public) {
	if (head.next === null) {
		head.next = public
		return
	}
	linkToEnd(head.next, public)
}
const publicHead = createList([2, 4])
const headA = createList([1, 9, 1])
const headB = createList([3])
linkToEnd(headA, publicHead)
linkToEnd(headB, publicHead)
// 以上只是为了构建两个有相交的链表

// 哈希表法
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function(headA, headB) {
// 	const set = new Set()
// 	let curHead = headA;
// 	while (curHead !== null) {
// 		set.add(curHead)
// 		curHead = curHead.next
// 	}
// 	curHead = headB
// 	while (curHead !== null) {
// 		if (set.has(curHead)) {
// 			return curHead
// 		}
// 		curHead = curHead.next
// 	}
// 	return null
// };

// 双指针法
// 假设：
// A 链表的非公共部分长度为 a ，B 链表的非公共部分长度为 b
// A，B 链表的公共部分长度为 c
// 则指针 pA 遍历A 链表结束后的长度为 a + c ，指针 pB 遍历B 链表结束后的长度为 b + c
// 然后 pA 遍历A 链表结束后再去遍历B 链表的非公共部分，此时步数为a + c + b
// 同理 pB 遍历B链表后再去遍历A链表的非公共部分，此时步数为b + c + a
// 也就是说，两个指针同时开始去遍历各自的链表
// 然后先遍历完的指针再去遍历另一个链表，后遍历完的指针也要去再遍历另一个链表
// 如果着两个链表有相交，那么这两个指针最终会同时到达相交点
// 如果没有，他们则会同时达到链表的最终点，也就是null
// 因为两个指针都遍历的两个链表，他们的步数都是a + c + b + c
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
	let pA = headA
	let pB = headB
	while (pA !== pB) {
		pA = pA ? pA.next : headB
		pB = pB ? pB.next : headA
	}
	return pA
};

console.log(getIntersectionNode(headA, headB))
