/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
	s = s.split('')

	const map = new Map(), ans = []
	s.forEach((v, i) => { map.set(v, i) })

	let start = -1, end = 0
	for (let i = 0; i < s.length; i++) {
		end = Math.max(end, map.get(s[i]))
		if (i === end) {
			ans.push(end - start)
			start = end
		}
	}

	return ans
};

const case1 = "ababcbacadefegdehijhklij"
console.log(partitionLabels(case1))
