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
	// 后序遍历
	const recurse = (root) => {
		if (root === null || root === p || root === q) {
			return root
		}
		const l = recurse(root.left)
		const r = recurse(root.right)
		// 如果当前节点找到了p和q，说明当前节点为公共祖先
		// 如果只找到p或者q
		return l !== null && r !== null ? root : l ?? r
	}
	return recurse(root)
}
