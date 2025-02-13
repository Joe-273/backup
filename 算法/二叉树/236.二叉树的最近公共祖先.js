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
	if (root === null) {
		return null
	}
	// 后序遍历
	if (root === p || root === q) {
		return root
	}

	// 递归查找目标值
	const l = lowestCommonAncestor(root.left, p, q)
	const r = lowestCommonAncestor(root.right, p, q)

	// 如果当前节点的子元素找到了l和r，那么当前节点就是最近祖先元素
	if (l && r) {
		return root
	}
	// 返回找到的节点
	return l ?? r
};
