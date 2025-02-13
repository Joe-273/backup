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
	let preNode = null
	return isValid(root)

	function isValid(root) {
		if (!root) {
			return true
		}

		// 中序遍历
		const left = isValid(root.left)

		if (preNode !== null && preNode.val >= root.val) {
			return false
		}
		preNode = root

		const right = isValid(root.right)

		return left && right
	}

};
