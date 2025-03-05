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
var sumOfLeftLeaves = function(root) {
	// 递归，后序
	if (root === null) { return 0 }
	if (root.left === null && root.right === null) { return 0 }
	// 左，右
	const l = sumOfLeftLeaves(root.left)
	const r = sumOfLeftLeaves(root.right)
	// 中
	let cur = 0
	if (root.left !== null && root.left.left === null && root.left.right === null) {
		cur = root.left.val
	}
	return l + r + cur
};
