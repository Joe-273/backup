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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
	if (!root) {
		return 0
	}
	const map = new Map()
	let ans = 0
	dfs(root)
	return ans

	function dfs(node, preSum = 0) {
		if (!node) {
			return 0
		}
		map.set(preSum, (map.get(preSum) || 0) + 1)
		const curSum = preSum + node.val
		// 当前节点的前缀和减去之前的前缀和，结果为目标值的数量
		ans += map.get(curSum - targetSum) || 0
		// 向下递归
		dfs(node.left, curSum)
		dfs(node.right, curSum)
		// 回溯，要清理前缀和
		map.set(preSum, map.get(preSum) - 1)
	}
};

