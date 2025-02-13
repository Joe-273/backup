class Heap {
	constructor(compareFn) {
		this.heap = [];
		this.compareFn = compareFn; // 比较函数决定堆类型
		this.size = 0;
	}
	push(val) {
		this.heap.push(val);
		this.size++;
		this.heapifyUp();
	}
	pop() {
		if (this.size === 0) return null;
		const top = this.heap[0];
		const last = this.heap.pop();
		this.size--;
		if (this.size > 0) {
			this.heap[0] = last;
			this.heapifyDown();
		}
		return top;
	}
	peek() {
		return this.heap[0] ?? null;
	}
	heapifyUp() {
		let index = this.size - 1;
		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2);
			if (this.compareFn(this.heap[index], this.heap[parentIndex]) >= 0) break;
			[this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
			index = parentIndex;
		}
	}
	heapifyDown() {
		let index = 0;
		const length = this.size;
		while (true) {
			const left = 2 * index + 1;
			const right = 2 * index + 2;
			let smallest = index;
			if (left < length && this.compareFn(this.heap[left], this.heap[smallest]) < 0) {
				smallest = left;
			}
			if (right < length && this.compareFn(this.heap[right], this.heap[smallest]) < 0) {
				smallest = right;
			}
			if (smallest === index) break;
			[this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
			index = smallest;
		}
	}
}

// 大顶堆存放的数是 小于等于 中位数的数
// 小顶堆存放的数是 大于 中位数的数
var MedianFinder = function() {
	this.minHeap = new Heap((a, b) => a - b)
	this.maxHeap = new Heap((a, b) => b - a)
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
	if (this.maxHeap.size === 0 || num <= this.maxHeap.peek()) {
		// 如果num比大顶堆的栈顶元素小
		// 也就是num应该在大顶堆中
		this.maxHeap.push(num)
		if (this.maxHeap.size - this.minHeap.size > 1) {
			// 说明两个堆不平衡，大顶堆的数太多了
			// 要把大顶堆的堆顶移到小顶堆中
			const num = this.maxHeap.pop()
			this.minHeap.push(num)
		}
	} else {
		// 否则说明num应该在小顶堆中
		this.minHeap.push(num)
		if (this.minHeap.size > this.maxHeap.size) {
			// 小顶堆的数多了
			const num = this.minHeap.pop()
			this.maxHeap.push(num)
		}
	}
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
	if (this.maxHeap.size === this.minHeap.size) {
		return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
	} else {
		return this.maxHeap.peek();
	}
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
