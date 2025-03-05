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
var preorderTraversal = function(root) {
	// 递归
	// const ans = []
	// recurse(root, ans)
	// return ans
	//
	// function recurse(root, arr) {
	// 	if (root === null) { return }
	// 	arr.push(root.val)
	// 	recurse(root.left, arr)
	// 	recurse(root.right, arr)
	// }

	// 迭代
	// const stack = [], ans = []
	// stack.push(root)
	// while (stack.length) {
	// 	const cur = stack.pop()
	// 	if (cur === null) {
	// 		continue
	// 	}
	// 	ans.push(cur.val)
	// 	// 先把右子树方栈中，再把左子树放栈中
	// 	// 弹出的时候才先弹出左子树
	// 	stack.push(cur.right)
	// 	stack.push(cur.left)
	// }
	// return ans

	// 迭代，空指针标记法
	// 前序遍历：中左右
	// 压栈顺序：右左中
	const stack = [], ans = []
	if (root) { stack.push(root) }
	while (stack.length) {
		const cur = stack.pop()
		if (cur === null) {
			ans.push(stack.pop().val)
			continue
		}
		if (cur.right) { stack.push(cur.right) }
		if (cur.left) { stack.push(cur.left) }
		stack.push(cur)
		// 放入空指针
		// 当读取到这个指针说明该收割当前节点了
		stack.push(null)
	}
	return ans
};

const tree = buildTreeFromList([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])
console.log(preorderTraversal(tree))
