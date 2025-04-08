function candy(ratings: number[]): number {
	const len = ratings.length
	const candies: number[] = new Array(len).fill(1)
	// 如果右边的小孩比左边小孩评分高，让右边小孩的糖果比左边的多一个
	for (let i = 1; i < len; i++) {
		if (ratings[i] > ratings[i - 1]) {
			candies[i] = candies[i - 1] + 1
		}
	}
	// 从后往前遍历，如果左边的小孩比右边的小孩评分高，取(右边小孩的糖果+1 , 第一次遍历后得到的这个小孩的糖果数) 的最值
	for (let i = len - 2; i >= 0; i--) {
		if (ratings[i] > ratings[i + 1]) {
			candies[i] = Math.max(candies[i], candies[i + 1] + 1)
		}
	}
	return candies.reduce((pre, cur) => pre + cur, 0)
};

const ca = [1, 0, 2]
console.log(candy(ca));

