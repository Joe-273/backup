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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
	// 递归，前序
	if (root === null) { return [] }
	const ans = []
	recurse(root)
	return ans

	function recurse(root, cur = '') {
		if (root.left === null && root.right === null) {
			ans.push(cur + root.val)
			return
		}
		cur += root.val + '->'
		if (root.left !== null) { recurse(root.left, cur) }
		if (root.right !== null) { recurse(root.right, cur) }
	}

	// 迭代
	// if (root === null) { return [] }
	// const stack = [root], ans = [], paths = ['']
	// while (stack.length) {
	// 	let node = stack.pop(), path = paths.pop()
	// 	if (node.left === null && node.right === null) {
	// 		ans.push(path + node.val)
	// 		continue
	// 	}
	// 	path += node.val + '->'
	// 	if (node.left !== null) {
	// 		stack.push(node.left)
	// 		paths.push(path)
	// 	}
	// 	if (node.right !== null) {
	// 		stack.push(node.right)
	// 		paths.push(path)
	// 	}
	// }
	// return ans
};
