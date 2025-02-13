/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
	// 1. 使用优先队列
	// // 最小堆实现
	// class MinHeap {
	// 	constructor() {
	// 		this.heap = [];
	// 	}
	//
	// 	// 获取堆的大小
	// 	size() {
	// 		return this.heap.length;
	// 	}
	//
	// 	// 插入元素
	// 	insert(val) {
	// 		this.heap.push(val); // 将新元素添加到堆的末尾
	// 		this.bubbleUp(this.heap.length - 1); // 调整堆结构
	// 	}
	//
	// 	// 删除堆顶元素（最小值）
	// 	extractMin() {
	// 		if (this.size() === 0) return null; // 堆为空时返回 null
	// 		const min = this.heap[0]; // 堆顶元素是最小值
	// 		const end = this.heap.pop(); // 移除堆的最后一个元素
	// 		if (this.size() > 0) {
	// 			this.heap[0] = end; // 将最后一个元素放到堆顶
	// 			this.bubbleDown(0); // 调整堆结构
	// 		}
	// 		return min;
	// 	}
	//
	// 	// 获取堆顶元素（最小值）
	// 	peek() {
	// 		return this.size() === 0 ? null : this.heap[0];
	// 	}
	//
	// 	// 上浮操作：调整新插入的元素
	// 	bubbleUp(index) {
	// 		const parent = Math.floor((index - 1) / 2); // 父节点的索引
	// 		if (index > 0 && this.heap[index] < this.heap[parent]) {
	// 			// 如果当前节点小于父节点，交换它们
	// 			[this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
	// 			this.bubbleUp(parent); // 递归调整
	// 		}
	// 	}
	//
	// 	// 下沉操作：调整堆顶元素
	// 	bubbleDown(index) {
	// 		const left = 2 * index + 1; // 左子节点的索引
	// 		const right = 2 * index + 2; // 右子节点的索引
	// 		let smallest = index; // 假设当前节点是最小的
	//
	// 		// 找到当前节点、左子节点、右子节点中的最小值
	// 		if (left < this.size() && this.heap[left] < this.heap[smallest]) {
	// 			smallest = left;
	// 		}
	// 		if (right < this.size() && this.heap[right] < this.heap[smallest]) {
	// 			smallest = right;
	// 		}
	//
	// 		// 如果当前节点不是最小值，交换并递归调整
	// 		if (smallest !== index) {
	// 			[this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
	// 			this.bubbleDown(smallest);
	// 		}
	// 	}
	// }
	// // 使用最小堆
	// const minHeap = new MinHeap();
	//
	// for (const num of nums) {
	// 	minHeap.insert(num);
	// 	if (minHeap.size() > k) {
	// 		minHeap.extractMin();
	// 	}
	// }
	//
	// return minHeap.peek();

	// 2. 桶排序
	// // 初始化桶, 值的范围题目为[-10000, 10000]
	// const bucket = new Array(20001).fill(0)
	// // 映射元素：元素 -10000 映射到索引 0，元素，...，10000 映射到索引 20000。
	// for (let i = 0; i < nums.length; i++) {
	// 	// 统计出现的元素个数
	// 	bucket[nums[i] + 10000]++
	// }
	// // 从后面遍历，找到第k个最大的元素
	// for (let i = 20000; i >= 0; i--) {
	// 	k -= bucket[i];
	// 	if (k <= 0) return i - 10000;
	// }
	// return -1

	// 3.快速选择
	// 在区间内选择第K个元素
	const len = nums.length, target = len - k
	let l = 0, r = len - 1
	while (true) {
		const [less, great] = partition(l, r)
		if (target >= less && target <= great) {
			// 如果目标位置处于第二个区间内
			// 可以直接将target位置的元素返回
			return nums[target]
		} else if (target > great) {
			// 如果target在第三个区间
			// 重新分区
			l = great + 1
		} else {
			// 如果target在第一个区间
			// 重新分区
			r = less - 1
		}
	}

	function partition(left, right) {
		const len = right - left + 1
		// 在范围内随机选取一个pivot
		const pivot = nums[Math.floor(Math.random() * len) + left]
		// 排序的范围从left -> right
		let less = left, great = right, cur = left
		// 从start指针开始遍历
		while (cur <= great) {
			if (nums[cur] < pivot) {
				// 说明当前遍历到的元素处于第一个区间
				// 将它与中间区间的第一个元素交换位置
				swap(cur, less)
				less++
				cur++
			} else if (nums[cur] > pivot) {
				// 说明当前遍历到的元素处于第三个区间
				// 将它与中间区间的最后一个元素交换位置
				swap(cur, great)
				great--
			} else {
				// 说明这个元素应该在第二个区间
				// 不需要交换
				cur++
			}
		}
		// 返回第二个区间
		return [less, great]
	}

	function swap(i, j) {
		if (i === j) {
			return
		}
		const t = nums[i]
		nums[i] = nums[j]
		nums[j] = t
	}
};


const case1 = [[-1, 2, 0], 3]
const case2 = [[3, 2, 1, 5, 6, 4], 2]
const case3 = [[2, 1], 2]

console.log(findKthLargest(...case2))
