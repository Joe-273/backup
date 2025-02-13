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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
	// 建立闭包，通过depth函数给ans赋结果值
	let count = 0, ans = -1 // 如果没有，返回-1
	depth(root)
	return ans

	// 中序遍历
	function depth(node) {
		if (!node) {
			return node
		}

		depth(node.left)
		if (++count === k) {
			ans = node.val
			return
		}
		depth(node.right)
	}
};
