/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
	// 队列存放的是下标，保证下标对应的元素值最大
	// 并且保证下标不超出窗口范围
	const deque = [], ans = new Array(nums.length - k)
	// 初始化
	for (let i = 0; i < k; i++) {
		while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
			deque.pop()
		}
		deque.push(i)
	}
	ans[0] = nums[deque[0]]
	// 遍历
	for (let i = k; i < nums.length; i++) {
		// 保证队列中的最小下标为 i - k + 1
		if (deque[0] === i - k) {
			deque.shift()
		}
		// 清空队列
		while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
			deque.pop()
		}
		deque.push(i)
		ans[i - k + 1] = nums[deque[0]]
	}

	return ans
};

const c1 = [[1, 3, -1, -3, 5, 3, 6, 7], 3]
console.log(maxSlidingWindow(...c1))
