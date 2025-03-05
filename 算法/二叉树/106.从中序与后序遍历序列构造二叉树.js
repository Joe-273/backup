/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
	// 切割数组
	// const len = inorder.length
	// if (len === 0) { return null }
	// const rootVal = postorder[len - 1]
	// const rootIndex = inorder.indexOf(rootVal)
	// const root = new TreeNode(rootVal)
	// root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex))
	// root.right = buildTree(inorder.slice(rootIndex + 1, len), postorder.slice(rootIndex, len - 1))
	// return root

	// 下标标记
	const len = inorder.length
	const map = new Map()
	for (let i = 0; i < len; i++) { map.set(inorder[i], i) }
	return recurse(0, len - 1, 0, len - 1)

	function recurse(inorL, inorR, postL, postR) {
		if (inorL > inorR) { return null }
		const val = postorder[postR]
		const rootIndex = map.get(val)
		const lSize = rootIndex - inorL
		const root = new TreeNode(val)
		root.left = recurse(inorL, rootIndex - 1, postL, postL + lSize - 1)
		root.right = recurse(rootIndex + 1, inorR, postL + lSize, postR - 1)
		return root
	}
}
