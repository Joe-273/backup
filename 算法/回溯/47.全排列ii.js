/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
	// // 可以通过将下标放入Set中告诉下一层递归已经选了哪些元素
	// // 这是树枝去重
	// // 这题还涉及到树层去重，还要在单层for循环中去重
	// // 题目说了num在[-10,10]区间
	// // 可以创建一个长度为21的数组来保存单层for循环中使用过的数
	// // （当然也可以每一次递归都创造一个set来保存当前层用了哪些数）
	// const ans = [], len = nums.length
	// backtracking([], new Set())
	// return ans
	// function backtracking(path, set) {
	// 	if (path.length === len) { return ans.push(Array.from(path)) }
	// 	let used = new Array(21)
	// 	for (let i = 0; i < len; i++) {
	// 		const cur = nums[i], index = cur + 10
	// 		if (set.has(i) || used[index] === 1) { continue }
	// 		path.push(nums[i]), set.add(i)
	// 		backtracking(path, set)
	// 		path.pop(), set.delete(i), used[index] = 1
	// 	}
	// }

	// 也可以排列后通过used数组去重
	nums.sort((a, b) => a - b)
	const ans = [], len = nums.length
	backtracking([], new Array(len).fill(0))
	return ans
	function backtracking(path, used) {
		if (path.length === len) { return ans.push(Array.from(path)) }
		for (let i = 0; i < len; i++) {
			const cur = nums[i]
			// 树层去重（for循环遍历过程中去重）
			if (i > 0 && nums[i - 1] === cur && used[i - 1] === 0) { continue }
			// 树枝去重（向下递归过程中去重）
			if (used[i] === 1) { continue }
			path.push(cur), used[i] = 1
			backtracking(path, used)
			path.pop(), used[i] = 0
		}
	}
};

const c = [1, 1, 2]
console.log(permuteUnique(c))
