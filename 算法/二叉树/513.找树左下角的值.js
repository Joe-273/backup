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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
	// 递归
	let ans, maxDepth = -Infinity
	recurse(root)
	return ans
	function recurse(root, depth = 0) {
		if (root === null) { return }
		if (depth > maxDepth) { maxDepth = depth, ans = root.val }
		if (root.left !== null) { recurse(root.left, depth + 1) }
		if (root.right !== null) { recurse(root.right, depth + 1) }
	}
};
