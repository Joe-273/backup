class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}
function buildTreeFromList(arr) {
	if (!arr || arr.length === 0 || arr[0] === null) {
		return null;
	}
	// 创建根节点
	const root = new TreeNode(arr[0]);
	const queue = [root];
	let i = 1;
	while (i < arr.length) {
		const current = queue.shift();
		if (arr[i] !== null) {
			current.left = new TreeNode(arr[i]);
			queue.push(current.left);
		}
		i++;
		if (i >= arr.length) break;
		if (arr[i] !== null) {
			current.right = new TreeNode(arr[i]);
			queue.push(current.right);
		}
		i++;
	}
	return root;
}
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
	// 递归
	// const ans = []
	// recurse(root)
	// return ans
	//
	// function recurse(root) {
	// 	if (root === null) { return }
	// 	recurse(root.left)
	// 	ans.push(root.val)
	// 	recurse(root.right)
	// }

	// 迭代
	// const stack = [], ans = []
	// let cur = root
	// while (cur || stack.length) {
	// 	while (cur) {
	// 		stack.push(cur)
	// 		cur = cur.left
	// 	}
	// 	cur = stack.pop()
	// 	ans.push(cur.val)
	// 	cur = cur.right
	// }
	// return ans

	// 迭代，空指针标记法
	// 中序遍历：左中右
	// 压栈顺序：右中左
	const stack = [], ans = []
	if (root) { stack.push(root) }
	while (stack.length) {
		const cur = stack.pop()
		if (cur === null) {
			ans.push(stack.pop().val)
			continue
		}
		if (cur.right) { stack.push(cur.right) }
		stack.push(cur)
		stack.push(null)
		if (cur.left) { stack.push(cur.left) }

	}
	return ans
};

const tree = buildTreeFromList([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])
console.log(inorderTraversal(tree))
