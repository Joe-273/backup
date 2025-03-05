/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
	// 题目中结果数组中，不能出现两个相同的情况
	// 比如[4,7,6,7]中
	// 同一层for循环中，可能能选到[4,7(1)],和[4,7(3)]
	// 这次的数组不一样的是不能排序，所以不能保证相同的元素是相邻的
	// 所以可以使用一个Set来标记当层使用过的数
	// Set 去重
	const ans = [], len = nums.length
	backtracking(0, [], -Infinity)
	return ans

	function backtracking(start, path, pre) {
		if (path.length >= 2) { ans.push(Array.from(path)) }
		const set = new Set()
		for (let i = start; i < len; i++) {
			const cur = nums[i]
			// 树层去重，指的是递归树的当前层（当前的for循环）去重
			// 用startIndex去重
			if (cur < pre || set.has(cur)) { continue }
			path.push(cur), set.add(cur)
			backtracking(i + 1, path, cur)
			path.pop()
		}
	}


	// 题目说num的范围为[-100,100]，所以可以创建一个长度为201的数组来记录
	// const ans = [], len = nums.length
	// backtracking(0, [], -Infinity)
	// return ans
	//
	// function backtracking(start, path, pre) {
	// 	if (path.length >= 2) { ans.push(Array.from(path)) }
	// 	const used = new Array(201)
	// 	for (let i = start; i < len; i++) {
	// 		const cur = nums[i], index = cur + 100
	// 		// 树层去重，指的是递归树的当前层（当前的for循环）去重
	// 		// 用startIndex去重
	// 		if (cur < pre || used[index] === 1) { continue }
	// 		path.push(cur), used[index] = 1
	// 		backtracking(i + 1, path, cur)
	// 		path.pop()
	// 	}
	// }
};

const c = [4, 6, 7, 7]
console.log(findSubsequences(c))
