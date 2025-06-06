export class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.left = (left === undefined ? null : left)
		this.right = (right === undefined ? null : right)
	}
}

function sumNumbers(root: TreeNode | null): number {
	if (!root) { return 0 }
	let ans: number = 0
	recurse(root)
	return ans

	function recurse(node: TreeNode, path = '') {
		if (!node.left && !node.right) {
			return ans += Number(path + node.val)
		}
		node.left && recurse(node.left, path + node.val)
		node.right && recurse(node.right, path + node.val)
	}
};
