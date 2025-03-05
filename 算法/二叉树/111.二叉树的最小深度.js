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
var minDepth = function(root) {
	// 层序遍历
	if (root === null) { return 0 }
	const queue = [root]
	let ans = 0
	while (queue.length) {
		const size = queue.length
		ans++
		for (let i = 0; i < size; i++) {
			const cur = queue.shift()
			if (cur.left === null && cur.right === null) {
				return ans
			}
			if (cur.left !== null) { queue.push(cur.left) }
			if (cur.right !== null) { queue.push(cur.right) }
		}
	}

	// 递归，后序
	// if (root === null) { return 0 }
	// if (root.right === null && root.left === null) { return 1 }
	// const l = minDepth(root.left) + 1
	// const r = minDepth(root.right) + 1
	// if (root.left === null) { return r }
	// if (root.right === null) { return l }
	// return Math.min(l, r)

	// 递归，前序
	// let ans = Infinity
	// recurse(root, 1)
	// return ans === Infinity ? 0 : ans
	// function recurse(root, depth) {
	// 	if (root === null) { return }
	// 	if (root.left === null && root.right === null) {
	// 		ans = Math.min(ans, depth)
	// 	}
	// 	recurse(root.left, depth + 1)
	// 	recurse(root.right, depth + 1)
	// }
};
