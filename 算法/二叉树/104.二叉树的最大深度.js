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
var maxDepth = function(root) {
	// 层序遍历法
	// if (root === null) { return 0 }
	// const queue = [root]
	// let ans = 0
	// while (queue.length) {
	// 	const size = queue.length
	// 	ans++
	// 	for (let i = 0; i < size; i++) {
	// 		const cur = queue.shift()
	// 		if (cur.left !== null) { queue.push(cur.left) }
	// 		if (cur.right !== null) { queue.push(cur.right) }
	// 	}
	// }
	// return ans

	// 递归，后序遍历求根节点的最大高度
	// 根节点的最大高度就是二叉树的最大深度
	// if (root === null) { return 0 }
	// const lDepth = maxDepth(root.left) + 1
	// const rDepth = maxDepth(root.right) + 1
	// return Math.max(lDepth, rDepth)

	// 递归，前序遍历直接求深度
	if (root === null) { return 0 }
	let ans = 0
	recurse(root, 0)
	return ans
	function recurse(root, depth) {
		if (root === null) {
			ans = ans > depth ? ans : depth
			return
		}
		recurse(root.left, depth + 1)
		recurse(root.right, depth + 1)
	}
};
