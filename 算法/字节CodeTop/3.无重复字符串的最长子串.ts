function lengthOfLongestSubstring(s: string): number {
	const map = new Map()
	let ans = 0
	let left = 0
	for (let i = 0; i < s.length; i++) {
		const cur = s[i]
		if (map.has(cur)) {
			left = Math.max(map.get(cur) + 1, left)
		}
		ans = Math.max(ans, i + 1 - left)
		map.set(cur, i)
	}
	return ans
};

console.log(lengthOfLongestSubstring("abcabcbb"));

