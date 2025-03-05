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
 * @return {TreeNode}
 */
var invertTree = function(root) {
	// 递归，前序
	// if (root === null) { return root }
	// const temp = root.left
	// root.left = root.right
	// root.right = temp
	// invertTree(root.left)
	// invertTree(root.right)
	// return root

	// 递归，后序
	// if (root === null) { return root }
	// invertTree(root.left)
	// invertTree(root.right)
	// const temp = root.left
	// root.left = root.right
	// root.right = temp
	// return root

	// 递归，中序
	// if (root === null) { return root }
	// invertTree(root.left)
	// const temp = root.left
	// root.left = root.right
	// root.right = temp
	// // 因为交换后，原来的右子树变成了左子树
	// invertTree(root.left)
	// return root

	// 迭代，前序遍历
	// if (root === null) { return null }
	// const stack = [root]
	// while (stack.length) {
	// 	const cur = stack.pop(), temp = cur.left
	// 	cur.left = cur.right, cur.right = temp
	// 	if (cur.right) { stack.push(cur.right) }
	// 	if (cur.left) { stack.push(cur.left) }
	// }
	// return root

	// 迭代，前序遍历
	// if (root === null) { return null }
	// const stack = [root]
	// while (stack.length) {
	// 	const cur = stack.pop(), temp = cur.left
	// 	cur.left = cur.right, cur.right = temp
	// 	if (cur.right) { stack.push(cur.right) }
	// 	if (cur.left) { stack.push(cur.left) }
	// }
	// return root

	// 迭代，后序遍历，空指针标记法
	// if (root === null) { return null }
	// const stack = [root]
	// while (stack.length) {
	// 	const cur = stack.pop()
	// 	if (cur === null) {
	// 		const node = stack.pop(), temp = node.left
	// 		node.left = node.right, node.right = temp
	// 		continue
	// 	}
	// 	if (cur.left) { stack.push(cur.left) }
	// 	if (cur.right) { stack.push(cur.right) }
	// 	stack.push(cur)
	// 	stack.push(null)
	// }
	// return rootreturn root

	// 迭代，前序遍历，空指针标记法
	if (root === null) { return null }
	const stack = [root]
	while (stack.length) {
		const cur = stack.pop()
		if (cur === null) {
			const node = stack.pop(), temp = node.left
			node.left = node.right, node.right = temp
			continue
		}
		stack.push(cur)
		stack.push(null)
		if (cur.left) { stack.push(cur.left) }
		if (cur.right) { stack.push(cur.right) }
	}
	return root
};
