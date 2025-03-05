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
 * @return {number[][]}
 */
var levelOrder = function(root) {
	const queue = [], ans = []
	if (root !== null) { queue.push(root) }
	while (queue.length) {
		const size = queue.length, curRes = []
		for (let i = 0; i < size; i++) {
			const cur = queue.shift()
			curRes.push(cur.val)
			if (cur.left !== null) { queue.push(cur.left) }
			if (cur.right !== null) { queue.push(cur.right) }
		}
		ans.push(curRes)
	}
	return ans
};

const tree = buildTreeFromList([3, 9, 20, null, null, 15, 7])
console.log(levelOrder(tree))
