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
 * @return {TreeNode}
 */
var convertBST = function(root) {
	let pre = 0
	recurse(root)
	return root
	function recurse(root) {
		// 逆向中序遍历
		if (root === null) { return }
		recurse(root.right)
		root.val += pre
		pre = root.val
		recurse(root.left)
	}
};
