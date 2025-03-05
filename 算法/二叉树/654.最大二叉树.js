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
var constructMaximumBinaryTree = function(nums) {
	// 下标标记
	const recurse = (l, r) => {
		if (l > r) { return null }
		let max = -Infinity, rootIdx = l
		for (let i = l; i <= r; i++) {
			if (nums[i] > max) { max = nums[i], rootIdx = i }
		}
		const root = new TreeNode(max)
		root.left = recurse(l, rootIdx - 1)
		root.right = recurse(rootIdx + 1, r)
		return root
	}
	return recurse(0, nums.length - 1)
};
