/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
	// 统计频率
	const map = new Map()
	// 统计每个元素出现的频率
	nums.forEach(num => {
		map.set(num, (map.get(num) || 0) + 1);
	});
	// 1. 桶排序
	// 初始化桶, 值的范围题目为[0, nums.length + 1]
	// 因为如果nums中的元素全部相同，那么里面元素出现的频率为nums.length + 1
	// const bucket = new Array(nums.length + 1), ans = []
	// map.forEach((v, k) => {
	// 	if (!bucket[v]) {
	// 		bucket[v] = [k]
	// 		return
	// 	}
	// 	bucket[v].push(k)
	// })
	// for (let i = bucket.length - 1; i >= 0; i--) {
	// 	if (bucket[i]) {
	// 		ans.push(...bucket[i])
	// 	}
	// 	if (ans.length === k) {
	// 		return ans
	// 	}
	// }

	// 2. 直接排序map后切分数组
	return [...map.entries()]
		.sort((a, b) => b[1] - a[1])
		.slice(0, k)
		.map(entry => entry[0]);

	// 3. 使用小顶堆
	// class MinHeap {
	// 	constructor(compareFn) {
	// 		this.heap = []
	// 		this.compareFn = compareFn; // 自定义比较函数
	// 	}
	// 	size() {
	// 		return this.heap.length
	// 	}
	// 	swap(i, j) {
	// 		if (i === j) return
	// 		const t = this.heap[i]
	// 		this.heap[i] = this.heap[j]
	// 		this.heap[j] = t
	// 	}
	// 	// 插入元素
	// 	push(value) {
	// 		this.heap.push(value); // 将新元素插入数组末尾
	// 		this.heapifyUp(); // 从下往上调整堆
	// 	}
	// 	// 弹出堆顶元素
	// 	pop() {
	// 		// 空堆直接返回
	// 		if (this.size() === 0) return null;
	// 		// 弹出最后一个元素，然后用其覆盖第一个元素
	// 		const top = this.heap[0]; // 堆顶元素
	// 		const last = this.heap.pop(); // 取出数组的最后一个元素
	// 		if (this.size() > 0) {
	// 			this.heap[0] = last; // 将最后一个元素放到堆顶
	// 			this.heapifyDown(); // 从上往下调整堆
	// 		}
	// 		return top; // 返回堆顶元素
	// 	}
	// 	// 从下往上调整堆
	// 	heapifyUp() {
	// 		let i = this.size() - 1; // 从最后一个元素开始
	// 		while (i > 0) {
	// 			// 父节点索引
	// 			const parentIdx = Math.floor((i - 1) / 2);
	// 			// 如果当前节点比父节点大，停止调整
	// 			if (this.compareFn(this.heap[i], this.heap[parentIdx]) >= 0) break;
	// 			// 交换当前节点和父节点
	// 			this.swap(i, parentIdx)
	// 			// 继续向上调整
	// 			i = parentIdx;
	// 		}
	// 	}
	// 	// 从上往下调整堆
	// 	heapifyDown() {
	// 		let i = 0; // 从堆顶开始
	// 		const len = this.size();
	// 		while (true) {
	// 			// 比较父节点与两个子节点的大小关系
	// 			// 小根堆要保证父节点小于等于两个子节点
	// 			const lChildIdx = 2 * i + 1; // 左子节点索引
	// 			const rChildIdx = 2 * i + 2; // 右子节点索引
	// 			let smallestIdx = i; // 假设当前节点是最小的
	//
	// 			// 如果左子节点比当前节点小，更新最小索引
	// 			if (
	// 				lChildIdx < len
	// 				&& this.compareFn(this.heap[lChildIdx], this.heap[smallestIdx]) < 0
	// 			) {
	// 				smallestIdx = lChildIdx;
	// 			}
	//
	// 			// 如果右子节点比当前节点小，更新最小索引
	// 			if (
	// 				rChildIdx < len
	// 				&& this.compareFn(this.heap[rChildIdx], this.heap[smallestIdx]) < 0
	// 			) {
	// 				smallestIdx = rChildIdx;
	// 			}
	//
	// 			// 如果当前节点已经是最小的，停止调整
	// 			if (smallestIdx === i) break;
	//
	// 			// 交换当前节点和最小节点
	// 			this.swap(i, smallestIdx)
	// 			// 继续向下调整
	// 			i = smallestIdx;
	// 		}
	// 	}
	// }
	//
	// // 定义小根堆的比较函数
	// const minHeap = new MinHeap((a, b) => a[1] - b[1]);
	//
	// // 遍历频率哈希表，维护大小为 k 的小根堆
	// for (const [num, freq] of map.entries()) {
	// 	minHeap.push([num, freq]);
	// 	if (minHeap.size() > k) {
	// 		minHeap.pop(); // 弹出频率最小的元素
	// 	}
	// }
	//
	// // 提取堆中的元素
	// const result = [];
	// while (minHeap.size() > 0) {
	// 	result.push(minHeap.pop()[0]);
	// }
	//
	// // 返回结果
	// return result;
};

const case1 = [[1, 1, 1, 2, 2, 3], 2]
console.log(topKFrequent(...case1))
