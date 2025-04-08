function fib(n: number): number {
	let pre = 1, cur = 1
	if (n <= 2) { return cur }
	for (let i = 2; i < n; i++) {
		const temp = cur
		cur = pre + cur
		pre = temp
	}
	return cur
};

console.log(fib(6));

