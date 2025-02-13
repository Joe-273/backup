
var MinStack = function() {
	this.stack = []
	this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
	this.stack.push(val)
	if (val < (this.minStack.at(-1) ?? Infinity)) {
		this.minStack.push(val)
	} else {
		this.minStack.push(this.minStack.at(-1))
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	this.minStack.pop()
	this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.stack.at(-1)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	return this.minStack.at(-1)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
