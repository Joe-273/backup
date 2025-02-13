class TrieNode {
	constructor() {
		this.child = new Map()
		this.isEnd = false
	}
}

var Trie = function() {
	this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
	let cur = this.root
	for (let i = 0; i < word.length; i++) {
		const char = word[i]
		if (!cur.child.has(char)) {
			cur.child.set(char, new TrieNode())
		}
		cur = cur.child.get(char)
	}
	// 循环到这个单词的最后一个字符后
	// 将该节点的isEnd 设为true，表示单词结尾
	cur.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
	const node = this.searchPrefix(word)
	return !!node && node.isEnd
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
	return !!this.searchPrefix(prefix)
};

Trie.prototype.searchPrefix = function(prefix) {
	let cur = this.root
	for (let i = 0; i < prefix.length; i++) {
		const char = prefix[i];
		if (cur.child.has(char)) {
			cur = cur.child.get(char)
		} else {
			return false
		}
	}
	return cur
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
