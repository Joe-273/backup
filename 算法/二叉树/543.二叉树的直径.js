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
var diameterOfBinaryTree = function(root) {
	let ans = 0

	// 深度优先遍历，计算出每个节点的左树和右树的直径和
	function dfs(node) {
		if (!node) {
			return 0
		}
		const left = dfs(node.left)
		const right = dfs(node.right)
		ans = Math.max(ans, left + right)
		return Math.max(left, right) + 1
	}
	dfs(root)

	return ans
};
