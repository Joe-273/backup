/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
	// Map
	// const m = ransomNote.length, n = magazine.length
	// if (m > n) {
	// 	return false
	// }
	//
	// ransomNote = ransomNote.split('')
	// magazine = magazine.split('')
	// const map = new Map()
	// for (let i = 0; i < n; i++) {
	// 	map.set(magazine[i], (map.get(magazine[i]) || 0) + 1)
	// }
	// for (let i = 0; i < m; i++) {
	// 	const count = map.get(ransomNote[i])
	// 	if ((count || 0) - 1 >= 0) {
	// 		map.set(ransomNote[i], count - 1)
	// 	} else {
	// 		return false
	// 	}
	// }
	// return true

	// 数组Hash
	const m = ransomNote.length, n = magazine.length
	if (m > n) {
		return false
	}

	ransomNote = ransomNote.split(''), magazine = magazine.split('')
	const hash = new Array(26).fill(0)
	for (let i = 0; i < n; i++) {
		hash[magazine[i].charCodeAt() - 97]++
	}
	for (let i = 0; i < m; i++) {
		hash[ransomNote[i].charCodeAt() - 97]--
		if (hash[ransomNote[i].charCodeAt() - 97] < 0) {
			return false
		}
	}
	return true
};

const case1 = ['aa', 'aab']
console.log(canConstruct(...case1))
