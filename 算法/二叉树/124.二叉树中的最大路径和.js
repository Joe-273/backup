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
var maxPathSum = function(root) {
	let ans = -Infinity
	dfs(root)
	return ans

	// 通过后序遍历
	function dfs(node) {
		if (!node) {
			return 0
		}

		// 如果左或右节点的值加上最大路径和为负数
		// 则其节点的最大路径和视为0
		const lSum = Math.max(dfs(node.left), 0)
		const rSum = Math.max(dfs(node.right), 0)
		// 当前节点为根的最大路径和
		ans = Math.max(ans, node.val + lSum + rSum)
		// 路径只能一直向下包含一个分支，不能有分叉
		//
		// 返回当前节点的最大路径和
		// const maxPath = Matn.max(lSum, rSum)
		return Math.max(lSum, rSum) + node.val
	}
};
