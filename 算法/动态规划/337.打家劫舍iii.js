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
var rob = function(root) {
	const res = dfs(root)
	return Math.max(res[0], res[1])
	// 每一个节点都有一个dp数组
	// dp[0]表示偷当前节点的最大值，
	// dp[1]表示不偷当前节点的最大值
	// 由题目可以知道，偷了当前节点就不能偷子节点
	// 偷了子节点就不能偷dan当前节点
	function dfs(node, dp = [0, 0]) {
		if (node === null) return dp

		const l = dfs(node.left)
		const r = dfs(node.right)

		// 偷当前节点: 当前节点的值 + 子节点不偷本身的最大值
		dp[0] = node.val + l[1] + r[1]
		// 不偷当前节点：偷不偷子节点的最大值
		dp[1] = Math.max(l[0], l[1]) + Math.max(r[0], r[1])

		return dp
	}
};
