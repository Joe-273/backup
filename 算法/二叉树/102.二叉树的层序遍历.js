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
 * @return {number[][]}
 */
var levelOrder = function(root) {
	if (!root) {
		return [];
	}
	const queue = [root], ans = []

	while (queue.length) {
		const curLevel = [], size = queue.length
		for (let i = 0; i < size; i++) {
			const curNode = queue.shift();
			curLevel.push(curNode.val)

			if (curNode.left) {
				queue.push(curNode.left);
			}
			if (curNode.right) {
				queue.push(curNode.right);
			}
		}
		ans.push(curLevel)
	}

	return ans;
};

