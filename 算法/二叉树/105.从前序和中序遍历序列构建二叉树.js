/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 使用数组的slice方法
// var buildTree = function(preorder, inorder) {
// 	// 递归终止条件：如果前序或中序数组为空，返回 null
// 	if (!preorder.length || !inorder.length) {
// 		return null;
// 	}
//
// 	// 前序遍历的第一个节点是根节点
// 	const root = new TreeNode(preorder[0]);
//
// 	const midIndex = inorder.indexOf(preorder[0]);
// 	root.left = buildTree(preorder.slice(1, midIndex + 1), inorder.slice(0, midIndex));
// 	root.right = buildTree(preorder.slice(midIndex + 1), inorder.slice(midIndex + 1));
//
// 	return root;
// };
// 使用下标标记
var buildTree = function(preorder, inorder) {
	if (!preorder.length || !inorder.length) {
		return null;
	}

	const len = inorder.length, map = new Map
	for (let i = 0; i < len; i++) {
		// 用空间换时间
		// 目的是能够快速查询根节点在中序遍历中的位置
		map.set(inorder[i], i)
	}

	return build(0, preorder.length, 0, inorder.length);

	function build(preLeft, preRight, inoLeft, inoRight) {
		if (preLeft === preRight || inoLeft === inoRight) {
			return null;
		}

		const val = preorder[preLeft], index = map.get(val)
		const leftTreeSize = index - inoLeft;

		return new TreeNode(
			val,
			build(preLeft + 1, preLeft + leftTreeSize + 1, inoLeft, index),
			build(preLeft + 1 + leftTreeSize, preRight, index + 1, inoRight),
		);

	}
};
