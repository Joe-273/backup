/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	const n = s.length, m = t.length
	if (n !== m) {
		return false
	}

	s = s.split(''), t = t.split('')
	const hash = new Array(26).fill(0)
	for (let i = 0; i < n; i++) {
		hash[s[i].charCodeAt() - 97]++
		hash[t[i].charCodeAt() - 97]--
	}
	for (let i = 0; i < 26; i++) {
		if (hash[i] !== 0) {
			return false
		}
	}
	return true
};

const case1 = ["anagram", "nagaram"]
console.log(isAnagram(...case1))
