/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
	const map = new Map()

	let cur = head
	while (cur) {
		map.set(cur, new _Node(cur.val))
		cur = cur.next
	}

	cur = head
	while (cur) {
		const node = map.get(cur)
		node.next = cur.next ? map.get(cur.next) : null
		node.random = map.get(cur.random)
		cur = cur.next
	}

	return map.get(head)
};
