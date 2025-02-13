/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
	// 维持一个双端单调递减队列
	const deque = []
	// 初始化队列
	for (let i = 0; i < k; i++) {
		// 清理队列
		while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
			// 如果队列的最后一个对于的数值（最小的数组）小于当前下标对应的数
			// 则将这个下标从右端弹出，目的是保证队列中下标对于的值单调递减
			deque.pop()
		}
		// 每次循环且清理队列结束后
		// 都将下标加入队列中
		deque.push(i)
	}

	const ans = [nums[deque[0]]]
	// 从k开始循环nums
	// 每次循环，也就是每次滑动窗口，都会取出一个最大值
	for (let i = k; i < nums.length; i++) {
		// 清理队列
		while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
			deque.pop()
		}
		deque.push(i)
		// i - k 表示当前窗口的最左边 - 1的下标
		if (deque[0] === i - k) {
			// 如果队列最左端（对于最大值）超出的窗口
			// 弹出，保证队列中的下标都在窗口内
			deque.shift()
		}
		// 此时队列最左端的下标一定在窗口内，并且一定是最大值
		ans.push(nums[deque[0]]);
	}

	return ans
};

const case1 = [[1, 3, -1, -3, 5, 3, 6, 7], 3]
const case2 = [[1], 1]
console.log(maxSlidingWindow(...case1))
