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
var isSymmetric = function(root) {
	if (!root) {
		return true
	}
	return compare(root.left, root.right)
};
function compare(left, right) {
	if (left === null && right !== null) {
		return false
	} else if (left !== null && right === null) {
		return false
	} else if (left === null && right === null) {
		return true
	} else if (left.val !== right.val) {
		return false
	} else {
		// 左右要比较的节点相等
		const outside = compare(left.left, right.right)
		const inside = compare(left.right, right.left)
		return outside && inside
	}
}
