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
var isValidBST = function(root) {
	// 二叉搜索树：中序遍历的结果从小到大排列
	let preNode = null
	return recurse(root)

	function recurse(root) {
		if (root === null) { return true }
		const l = recurse(root.left)
		if (preNode !== null && root.val <= preNode.val) {
			return false
		}
		preNode = root
		const r = recurse(root.right)
		return l && r
	}
};
