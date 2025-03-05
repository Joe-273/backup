/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
	if (root === null) { return root }
	const queue = [root]
	while (queue.length) {
		const size = queue.length
		for (let i = 0; i < size; i++) {
			const cur = queue.shift()
			if (cur.left) { queue.push(cur.left) }
			if (cur.right) { queue.push(cur.right) }
			if (i === size - 1) { break }
			cur.next = queue[0]
		}
	}
	return root
};
