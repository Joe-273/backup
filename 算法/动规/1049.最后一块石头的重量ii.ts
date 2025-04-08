function lastStoneWeightII(stones: number[]): number {
	// 思路：想让剩下的石头重量尽可能小，就让两个相撞的石头尽可能相同
	// 所以两个石头两个石头相撞，也可以转变为两堆石头相撞
	// 所以让这两堆石头的重量尽量相似，就能让剩下的石头重量尽可能小。
	const sum = stones.reduce((pre, cur) => pre + cur)
	const bagSize = sum >>> 1
	// 定义一个最大容量为bagSize的背包，然后尽可能地往里面加石头
	// 初始化：容量为0的时候，最大重量为0
	const dp: number[] = new Array(bagSize + 1).fill(0)
	for (let i = 0; i < stones.length; i++) {
		const cur = stones[i]
		for (let j = bagSize; j >= cur; j--) {
			dp[j] = Math.max(dp[j], dp[j - cur] + cur)
		}
	}
	return sum - dp[bagSize] * 2
};

console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1]));

