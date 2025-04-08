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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	return recurse(root)

	function recurse(node: TreeNode | null): TreeNode | null {
		if (node === p || node === q || node === null) {
			return node
		}
		const l = recurse(node.left)
		const r = recurse(node.right)
		if (l !== null && r !== null) {
			return node
		}
		return l ?? r
	}
};
