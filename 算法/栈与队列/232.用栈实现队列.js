
var MyQueue = function() {
	this.stackIn = []
	this.stackOut = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
	this.stackIn.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
	if (this.stackOut.length === 0) {
		while (this.stackIn[0]) {
			this.stackOut.push(this.stackIn.pop())
		}
	}
	return this.stackOut.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
	const head = this.pop()
	this.stackOut.push(head)
	return head
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
	return !this.stackIn.length && !this.stackOut.length
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
