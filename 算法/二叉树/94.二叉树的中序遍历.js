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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
	const ans = []
	dfs(root, ans)
	return ans
};
// 深度优先遍历，递归
// function dfs(root, ans) {
// 	if (!root) {
// 		return root
// 	}
//
// 	dfs(root.left, ans)
// 	ans.push(root.val)
// 	dfs(root.right, ans)
// }
// 深度优先遍历，迭代
function dfs(root, ans) {
	const stack = []
	let cur = root

	while (cur || stack.length) {
		// 当前节点非空，入栈
		while (cur) {
			stack.push(cur)
			cur = cur.left
		}
		// 当前节点为空，弹出栈顶元素
		// 将栈顶元素加入结果
		cur = stack.pop()
		ans.push(cur.val)
		cur = cur.right
	}
}
