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
var maxDepth = function(root) {
	return dfs_recursion(root)
	// return bfs(root)
	// return dfs(root)
};

function bfs(root) {
	if (!root) {
		return 0
	}
	// 广度优先搜索，使用队列
	const queue = []
	let maxDepth = 1, index = 0
	queue.push([root, 1])
	let cur = queue[index]
	while (cur) {
		const [node, depth] = cur

		maxDepth = Math.max(maxDepth, depth)
		if (node?.left) {
			queue.push([node.left, depth + 1])
		}
		if (node?.right) {
			queue.push([node.right, depth + 1])
		}
		index++
		cur = queue[index]
	}
	return maxDepth
}

function dfs(root) {
	if (!root) {
		return 0
	}
	// 深度优先搜索，使用栈
	// 二叉树的深度为：
	// 二叉树的子树的深度的最大值
	const stack = []
	let cur = root, maxDepth = 1
	stack.push([cur, maxDepth])
	while (stack.length) {
		const [node, depth] = stack.pop()
		// 选择最大深度
		maxDepth = Math.max(depth, maxDepth)
		if (node?.right) {
			stack.push([node.right, depth + 1])
		}
		if (node?.left) {
			stack.push([node.left, depth + 1])
		}
	}
	return maxDepth
}

function dfs_recursion(node) {
	if (!node) {
		return 0
	}
	// 使用后序遍历
	const lDepth = dfs_recursion(node.left) + 1
	const rDepth = dfs_recursion(node.right) + 1
	return Math.max(lDepth, rDepth)
}

