/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
	// 保证 q 大于 p
	if (p.val >= q.val) { return recurse(root, q, p) }
	return recurse(root, p, q)

	function recurse(root, p, q) {
		if (root === null) { return null }
		if (root.val > q.val) { return recurse(root.left, p, q) }
		if (root.val < p.val) { return recurse(root.right, p, q) }
		// p.val <= root.val <= q.val
		return root
	}
};
