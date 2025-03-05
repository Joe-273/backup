/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
	// 递归
	// const ans = []
	// recurse(root)
	// return ans
	// function recurse(root) {
	// 	if (root === null) { return }
	// 	for (const child of root.children) {
	// 		recurse(child)
	// 	}
	// 	ans.push(root.val)
	// }

	// 迭代
	// 后序遍历：孩子1 孩子2 .. 中
	// 压栈顺序：中 .. 孩子2 孩子1
	if (root === null) { return [] }
	const stack = [root], ans = []
	while (stack.length) {
		const cur = stack.pop()
		if (cur === null) {
			ans.push(stack.pop().val)
			continue
		}
		stack.push(cur)
		stack.push(null)
		for (let i = cur.children.length - 1; i >= 0; i--) {
			stack.push(cur.children[i])
		}
	}
	return ans
};
