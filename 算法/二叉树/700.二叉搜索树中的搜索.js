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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
	// 递归，前序遍历
	if (root === null) { return null }
	if (root.val === val) { return root }
	if (root.val > val) { return searchBST(root.left, val) }
	else { return searchBST(root.right, val) }
};
