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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
	if (root === null) { return root }
	if (root.val === key) {
		// 找到的节点没有子节点
		if (root.left === null && root.right === null) { return null }
		// 只有左节点
		if (root.right === null) { return root.left }
		// 只有右节点
		if (root.left === null) { return root.right }
		// 找到的节点有左孩子和右孩子
		// 将左孩子放到有孩子的最小节点的左孩子处
		let cur = root.right
		while (cur.left) { cur = cur.left }
		cur.left = root.left
		return root.right
	}
	if (root.val > key) { root.left = deleteNode(root.left, key) }
	if (root.val < key) { root.right = deleteNode(root.right, key) }
	return root
};
