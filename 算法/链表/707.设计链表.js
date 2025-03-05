class ListNode {
	constructor(val, next) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}

var MyLinkedList = function() {
	this._size = 0
	this._head = null
	this._tail = null
};


MyLinkedList.prototype.getNode = function(index) {
	if (index < 0 || index >= this._size) {
		return null
	}

	let cur = new ListNode(0, this._head)
	while (index-- >= 0) {
		cur = cur.next
	}
	return cur
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
	if (index < 0 || index >= this._size) {
		return -1
	}
	return this.getNode(index).val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
	const newHead = new ListNode(val, this._head)
	this._head = newHead
	this._size++
	// 只有newHead一个节点时
	if (!this._tail) {
		this._tail = newHead
	}
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
	const newTail = new ListNode(val)
	if (!this._tail) {
		this._head = newTail
		this._tail = newTail
		this._size++
		return
	}
	this._tail.next = newTail
	this._tail = newTail
	this._size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
	if (index < 0 || index > this._size) {
		return
	}
	// 插入头部
	if (index === 0) {
		this.addAtHead(val)
		return
	}
	// 插入尾部
	if (index === this._size) {
		this.addAtTail(val)
		return
	}
	const node = this.getNode(index - 1)
	const newNode = new ListNode(val, node.next)
	node.next = newNode
	this._size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
	if (index < 0 || index >= this._size) {
		return
	}
	if (index === 0) {
		this._head = this._head.next
		if (index === this._size - 1) {
			this._tail = this._head
		}
		this._size--
		return
	}
	const node = this.getNode(index - 1)
	node.next = node.next.next
	if (index === this._size - 1) {
		this._tail = node
	}
	this._size--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
