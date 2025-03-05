/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	const queue = [], ans = []
	if (root !== null) { queue.push(root) }
	while (queue.length) {
		const size = queue.length, curLevel = []
		for (let i = 0; i < size; i++) {
			const cur = queue.shift()
			curLevel.push(cur.val)
			cur.children.forEach(i => queue.push(i))
		}
		ans.push(curLevel)
	}
	return ans
};
