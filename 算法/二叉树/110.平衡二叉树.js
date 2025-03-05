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
 * @return {boolean}
 */
var isBalanced = function(root) {
	// 递归，后序遍历求高度
	function getDepth(root) {
		if (root === null) { return 0 }
		const l = getDepth(root.left)
		const r = getDepth(root.right)
		if (l === -1 || r === -1) { return -1 }
		if (Math.abs(l - r) > 1) { return -1 }
		return Math.max(l, r) + 1
	}
	return getDepth(root) !== -1
};
