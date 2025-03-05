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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
	// 递归，回溯
	// 如果二叉树为空直接返回false
	if (root === null) { return false }
	// 走到叶子节点就停
	if (root.left === null && root.right === null) { return root.val === targetSum }
	const l = hasPathSum(root.left, targetSum - root.val)
	const r = hasPathSum(root.right, targetSum - root.val)
	return l || r
};
