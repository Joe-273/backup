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
var averageOfLevels = function(root) {
	const queue = [], ans = []
	if (root !== null) { queue.push(root) }
	while (queue.length) {
		const size = queue.length
		let curSum = 0
		for (let i = 0; i < size; i++) {
			const cur = queue.shift()
			curSum += cur.val
			if (cur.left !== null) { queue.push(cur.left) }
			if (cur.right !== null) { queue.push(cur.right) }
		}
		ans.push(curSum / size)
	}
	return ans
};
