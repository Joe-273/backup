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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 迭代法
// var flatten = function(root) {
// 	let curNode = root
// 	while (curNode) {
// 		if (curNode.left) {
// 			let lastRight = curNode.left
// 			// 找到左孩子的最后一个右节点
// 			while (lastRight.right) {
// 				lastRight = lastRight.right
// 			}
// 			lastRight.right = curNode.right
// 			curNode.right = curNode.left
// 			curNode.left = null
// 		}
// 		curNode = curNode.right
// 	}
// };
// 递归法
var flatten = function(root) {
	dfs(root)
	return root

	function dfs(node) {
		if (!node) {
			return
		}
		dfs(node.left)
		dfs(node.right)
		if (node.left) {
			let lastRight = node.left
			while (lastRight.right) {
				lastRight = lastRight.right
			}
			lastRight.right = node.right
			node.right = node.left
			node.left = null
		}
	}
}

