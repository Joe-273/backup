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
var getMinimumDifference = function(root) {
	// 中序遍历
	let preNode = null, ans = Infinity
	recurse(root)
	return ans
	function recurse(root) {
		if (root === null) { return }
		recurse(root.left)
		if (preNode !== null) {
			ans = Math.min(ans, root.val - preNode.val)
		}
		preNode = root
		recurse(root.right)
	}

	// 迭代法
	// const stack = [root]
	// let preNode = null, ans = Infinity
	// while (stack.length) {
	// 	const cur = stack.pop()
	// 	if (cur === null) {
	// 		const node = stack.pop()
	// 		if (preNode !== null) {
	// 			ans = Math.min(ans, node.val - preNode.val)
	// 		}
	// 		preNode = node
	// 		continue
	// 	}
	// 	// 中序遍历，压栈顺序：右中左
	// 	if (cur.right !== null) { stack.push(cur.right) }
	// 	stack.push(cur, null)
	// 	if (cur.left !== null) { stack.push(cur.left) }
	// }
	// return ans
};
