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
 * @return {number[]}
 */
var findMode = function(root) {
	// count表示跟当前元素的元素个数
	// maxCount表示所有元素中最大的个数-1
	let maxCount = 1, count = 1, preNode = null, ans = []
	recurse(root)
	return ans

	// 中序遍历
	function recurse(root) {
		if (root === null) { return }
		// 左
		recurse(root.left)
		// 中
		if (preNode !== null && preNode.val === root.val) {
			// 当前元素与之前元素相等
			count++
		} else {
			// 上一个元素为空，或者当前元素与上个元素不等
			// 表示当前元素出现的个数为1（刚出现）
			count = 1
		}
		if (count === maxCount) { ans.push(root.val) }
		if (count > maxCount) {
			// 更新maxCount和结果数组
			maxCount = count, ans = [root.val]
		}
		preNode = root
		// 右
		recurse(root.right)
	}

};
