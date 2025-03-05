/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
	const queue = [], ans = []
	if (root !== null) { queue.push(root) }
	while (queue.length) {
		const size = queue.length
		let curRight
		for (let i = 0; i < size; i++) {
			const cur = queue.shift()
			curRight = cur.val
			if (cur.left !== null) { queue.push(cur.left) }
			if (cur.right !== null) { queue.push(cur.right) }
		}
		ans.push(curRight)
	}
	return ans
};

