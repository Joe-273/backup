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
var postorderTraversal = function(root) {
	// 递归
	// const ans = []
	// recurse(root)
	// return ans
	//
	// function recurse(root) {
	// 	if (root === null) { return }
	// 	recurse(root.left)
	// 	recurse(root.right)
	// 	ans.push(root.val)
	// }

	// 迭代
	// // 左子树访问完成后再访问右子树再访问跟节点
	// const stack = [], ans = []
	// let cur = root, last = root
	// while (cur || stack.length) {
	// 	// 先访问左子树
	// 	while (cur) {
	// 		stack.push(cur)
	// 		cur = cur.left
	// 	}
	// 	// 左子树访问到头了，拿到栈顶的元素
	// 	cur = stack[stack.length - 1]
	// 	if (cur.right === null || cur.right === last) {
	// 		// 如果其右子树为空或者右子树访问过了
	// 		// 说明可以访问和输出当前节点了
	// 		ans.push(cur.val)
	// 		// 将上一个访问的节点设置为当前节点
	// 		// 并将当前节点弹出栈中
	// 		last = stack.pop()
	// 		// 将当前节点置空，下一次循环时不用进入子循环
	// 		cur = null
	// 	} else {
	// 		// 说明右子树没访问过
	// 		// 进入下轮循环访问其左子树
	// 		cur = cur.right
	// 	}
	// }
	// return ans

	// 迭代，空指针标记法
	// 后序遍历：左右中
	// 压栈顺序：中右左
	const stack = [], ans = []
	if (root) { stack.push(root) }
	while (stack.length) {
		// cur 从栈里弹出，除法是自己加入的空指针
		// 否则不存在弹出 null 的情况
		const cur = stack.pop()
		if (cur === null) {
			ans.push(stack.pop().val)
			continue
		}
		stack.push(cur)
		stack.push(null)
		if (cur.right) { stack.push(cur.right) }
		if (cur.left) { stack.push(cur.left) }
	}
	return ans
};

const tree = buildTreeFromList([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])
console.log(postorderTraversal(tree))
