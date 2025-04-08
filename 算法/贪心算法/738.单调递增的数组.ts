function monotoneIncreasingDigits(n: number): number {
	const nums: number[] = n.toString().split('').map(i => Number(i))
	const len = nums.length
	let flag = len
	for (let i = len - 2; i >= 0; i--) {
		if (nums[i] > nums[i + 1]) {
			flag = i + 1
			nums[i] -= 1
		}
	}
	for (let i = flag; i < len; i++) {
		nums[i] = 9
	}
	return Number(nums.join(''))
};

console.log((monotoneIncreasingDigits(332)));

