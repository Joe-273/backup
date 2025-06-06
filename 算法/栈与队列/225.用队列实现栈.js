
var MyStack = function() {
	this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
	this.queue.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
	const size = this.queue.length
	for (let i = 1; i < size; i++) {
		this.queue.push(this.queue.shift())
	}
	return this.queue.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
	const top = this.pop()
	this.queue.push(top)
	return top
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
	return !this.queue.length
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
