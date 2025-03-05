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
var largestValues = function(root) {
	if (root === null) { return [] }
	const queue = [root], ans = []
	while (queue.length) {
		const size = queue.length
		let curRes = -Infinity
		for (let i = 0; i < size; i++) {
			const cur = queue.shift()
			curRes = cur.val > curRes ? cur.val : curRes
			if (cur.left !== null) { queue.push(cur.left) }
			if (cur.right !== null) { queue.push(cur.right) }
		}
		ans.push(curRes)
	}
	return ans
};
