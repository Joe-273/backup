/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
	// 递归
	// const ans = []
	// recurse(root)
	// return ans
	// function recurse(root) {
	// 	if (root === null) { return }
	// 	ans.push(root.val)
	// 	for (const child of root.children) {
	// 		recurse(child)
	// 	}
	// }

	// 迭代
	// 前序遍历：中 孩子1 孩子2 ..
	// 压栈顺序：.. 孩子2 孩子1 中
	if (root === null) { return [] }
	const stack = [root], ans = []
	while (stack.length) {
		const cur = stack.pop()
		if (cur === null) {
			ans.push(stack.pop().val)
			continue
		}
		for (let i = cur.children.length - 1; i >= 0; i--) {
			stack.push(cur.children[i])
		}
		stack.push(cur)
		stack.push(null)
	}
	return ans
};
