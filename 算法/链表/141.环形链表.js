// 哈希表法
// var hasCycle = function(head) {
// 	const set = new Set()
// 	let curHead = head
// 	while (curHead) {
// 		if (set.has(curHead)) {
// 			return true
// 		}
// 		set.add(curHead)
// 		curHead = curHead.next
// 	}
// 	return false
// };

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针
var hasCycle = function(head) {
	let fast = head, slow = head
	while (fast && fast.next) {
		fast = fast.next.next
		slow = slow.next
		if (fast === slow) {
			return true
		}
	}
	return false
};
