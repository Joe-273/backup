// 由于互为字母异位词的两个字符串包含的 字母相同，
// 因此对两个字符串分别进行 排序之后 得到的字符串 一定相同，
// 故可以将排序之后的字符串作为哈希表的键。

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
	const map = new Map()
	for (const str of strs) {
		const key = Array.from(str).sort().toString()
		const list = map.get(key) ? map.get(key) : new Array()
		list.push(str);
		map.set(key, list)
	}
	return Array.from(map.values())
}

const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"]
const strs2 = [""]
const strs3 = ["eat", "eat"]
const strs4 = ["", "a"]
console.log(groupAnagrams(strs1))
