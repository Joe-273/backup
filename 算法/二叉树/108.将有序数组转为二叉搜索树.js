/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
	return recurse(0, nums.length - 1)
	function recurse(l, r) {
		// 数组升序排列，选中间的作为根节点
		// 左边部分为左子树，右边部分为右子树
		if (l > r) { return null }
		const mid = (l + r) >> 1
		const root = new TreeNode(nums[mid])
		root.left = recurse(l, mid - 1)
		root.right = recurse(mid + 1, r)
		return root
	}
};
