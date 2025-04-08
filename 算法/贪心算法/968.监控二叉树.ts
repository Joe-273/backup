/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.left = (left === undefined ? null : left)
		this.right = (right === undefined ? null : right)
	}
}

function minCameraCover(root: TreeNode | null): number {
	// 节点状态：0: 没被监控；1: 放摄像头；2: 被摄像头监控
	type State = 0 | 1 | 2

	let ans = 0
	const r = recurse(root)
	if (r === 0) { ans++ }
	return ans

	function recurse(node: TreeNode | null): State {
		if (node === null) { return 2 }
		// 后续遍历
		const l = recurse(node.left)
		const r = recurse(node.right)

		let resultState: State = 0
		if (l === 0 || r === 0) {
			// 左右孩子如果至少有一个没有被监控的
			resultState = 1
			ans++
		} else if (l === 1 || r === 1) {
			// 左右孩子如果至少有一个装了摄像头
			resultState = 2
		} else {
			// 左右孩子都有被监控了
			resultState = 0
		}
		return resultState
	}
};
