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
var countNodes = function(root) {
	// 递归，判断满二叉树的方式求节点数量
	if (root === null) { return 0 }
	let l = root, r = root, depth = 0
	while (l !== null && r !== null) { l = l.left, r = r.right, depth++ }
	if (l === null && r === null) { return (1 << depth) - 1 }
	const lNums = countNodes(root.left)
	const rNums = countNodes(root.right)
	return lNums + rNums + 1
};
