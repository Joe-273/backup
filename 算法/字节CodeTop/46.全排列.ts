function permute(nums: number[]): number[][] {
	const len = nums.length
	const ans: number[][] = [], used = new Array(len).fill(0)
	backtracking([])
	return ans

	function backtracking(path: number[]) {
		if (path.length === len) {
			return ans.push(Array.from(path))
		}
		for (let i = 0; i < len; i++) {
			if (used[i]) {
				continue
			}
			const cur = nums[i]
			path.push(cur)
			used[i] = 1
			backtracking(path)
			used[i] = 0
			path.pop()
		}
	}
};

console.log(permute([1, 2, 3]));

