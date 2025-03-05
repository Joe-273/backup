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
	// 递归
	// if (root === null) { return true }
	// return compare(root.left, root.right)
	// function compare(l, r) {
	// 	if (l !== null && r === null) { return false }
	// 	else if (l === null && r !== null) { return false }
	// 	else if (l === null && r === null) { return true }
	// 	else if (l.val !== r.val) { return false }
	// 	const outside = compare(l.left, r.right)
	// 	const inside = compare(l.right, r.left)
	// 	return outside && inside
	// }

	// 迭代，队列
	// if (root === null) { return true }
	// const queue = [root.left, root.right]
	// while (queue.length) {
	// 	const l = queue.shift(), r = queue.shift()
	// 	if (l === null && r === null) { continue }
	// 	if (l === null || r === null || l.val !== r.val) { return false }
	// 	queue.push(l.left, r.right)
	// 	queue.push(l.right, r.left)
	// }
	// return true

	// 迭代，栈
	if (root === null) { return true }
	const stack = [root.left, root.right]
	while (stack.length) {
		const l = stack.pop(), r = stack.pop()
		if (l === null && r === null) { continue }
		if (l === null || r === null || l.val !== r.val) { return false }
		stack.push(l.right, r.left)
		stack.push(l.left, r.right)
	}
	return true
};
