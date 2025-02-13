function Node(key, value, prev, next) {
	this.key = key
	this.value = value
	this.prev = prev
	this.next = next
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
	this.capacity = capacity
	// 哈希表和哈希表大小
	this.hashmap = new Map()
	this.mapsize = 0
	// 定义头部和尾部两个保护节点
	this.head = new Node()
	this.tail = new Node()
	this.head.next = this.tail
	this.tail.prev = this.head
};

/**
 * 要求在O(1)的时间内查找到元素，找到元素后*更新元素*
 * [更新元素]：将元素删除，再从头部插入
 * 可以用map[key, node]来建立链表的对应关系
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
	const map = this.hashmap
	if (map.has(key)) {
		const node = map.get(key)
		this.remove(node)
		this.insert(node)
		return node.value
	}
	return -1
};

/**
 * 在头部插入节点，如果总容量超过了额定容量
 * 删除尾部节点
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
	const map = this.hashmap
	if (map.has(key)) {
		// 如果已经存在这个key
		// 更新value，并且将节点放到链表最前面
		const node = map.get(key)
		node.value = value
		this.remove(node)
		this.insert(node)
	} else {
		// 如果不存在
		if (this.mapsize >= this.capacity) {
			// 如果超出了容量
			// 复用尾部节点
			const last = this.tail.prev;
			map.delete(last.key);
			last.key = key;
			last.value = value;
			this.remove(last)
			this.insert(last)
			map.set(key, last);
		} else {
			// 如果没有超出容量
			// 创建一个新的节点，插入头部
			const node = new Node(key, value);
			this.insert(node);
			map.set(key, node);
			this.mapsize++
		}
	}
};
LRUCache.prototype.remove = function(node) {
	node.prev.next = node.next
	node.next.prev = node.prev
}
LRUCache.prototype.insert = function(node, head) {
	head = this.head || head
	const next = head.next
	node.next = next
	next.prev = node
	head.next = node
	node.prev = head
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1));    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2));    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1));    // 返回 -1 (未找到)
console.log(lRUCache.get(3));    // 返回 3
console.log(lRUCache.get(4));    // 返回 4
