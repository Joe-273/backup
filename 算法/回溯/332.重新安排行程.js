/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
	// 回溯1（超时）
	// const ans = ['JFK'], len = tickets.length
	// const map = new Map()
	// for (const [from, to] of tickets) {
	// 	if (!map.has(from)) {
	// 		map.set(from, [])
	// 	}
	// 	map.get(from).push(to)
	// }
	// // 按字母序来排序to数组
	// for (const status of map.values()) { status.sort() }
	// backtracking('JFK')
	// return ans
	//
	// function backtracking(from) {
	// 	// 返回true说明找到了唯一的行程
	// 	if (ans.length === len + 1) { return true }
	// 	const to = map.get(from), toLen = to?.length
	// 	for (let i = 0; toLen && i < toLen; i++) {
	// 		const curTo = to.shift()
	// 		ans.push(curTo)
	// 		if (backtracking(curTo)) { return true }
	// 		// 回溯
	// 		to.push(curTo)
	// 		ans.pop()
	// 	}
	// 	return false
	// }

	// 回溯2（超时）
	// const map = new Map()
	// const ans = ['JFK'], len = tickets.length
	// // 初始化Map: from: {to:[],'xxx':xx, 'yyy':xx, ..}
	// for (const [from, to] of tickets) {
	// 	if (!map.has(from)) {
	// 		map.set(from, new Map())
	// 		map.get(from).set('to', [])
	// 	}
	// 	const subMap = map.get(from)
	// 	subMap.get('to').push(to)
	// 	subMap.set(to, (subMap.get(to) || 0) + 1)
	// }
	// // 排序to数组
	// for (const subMap of map.values()) { subMap.get('to').sort() }
	// console.log(map)
	// backtracking('JFK')
	// return ans
	//
	// function backtracking(from) {
	// 	if (ans.length === len + 1) { return true }
	// 	// 如果没有下一站
	// 	if (!map.has(from)) { return false }
	// 	const subMap = map.get(from), to = subMap.get('to')
	// 	for (let i = 0; i < to.length; i++) {
	// 		const curTo = to[i], times = subMap.get(curTo)
	// 		// 如果去这个地方的票已经用完了,看下一条路线
	// 		if (times === 0) { continue }
	// 		ans.push(curTo)
	// 		subMap.set(curTo, times - 1)
	// 		if (backtracking(curTo)) { return true }
	// 		ans.pop()
	// 		subMap.set(curTo, times)
	// 	}
	// }

	// 回溯3
	/**
		 TicketsMap 实例：
		 { NRT: Map(1) { 'JFK' => 1 }, JFK: Map(2) { 'KUL' => 1, 'NRT' => 1 } }
		 这里选择Map数据结构的原因：与Object类型的一个主要差异是，Map会维护键值对的插入顺序
	*/
	tickets.sort((a, b) => a[1] < b[1] ? -1 : 1)
	const map = {}, len = tickets.length
	for (const [from, to] of tickets) {
		if (map[from] === undefined) {
			map[from] = new Map()
		}
		map[from].set(to, (map[from].get(to) || 0) + 1)
	}
	const ans = ['JFK']
	backTracking('JFK')
	return ans
	function backTracking(from) {
		if (ans.length === len + 1) return true
		const targetMap = map[from]
		if (targetMap !== undefined) {
			for (const [to, count] of targetMap.entries()) {
				if (count > 0) {
					ans.push(to)
					targetMap.set(to, count - 1)
					if (backTracking(to) === true) return true
					targetMap.set(to, count)
					ans.pop()
				}
			}
		}
		return false
	}
};

const c1 = [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]
const c2 = [["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]
const c3 = [["EZE", "AXA"], ["TIA", "ANU"], ["ANU", "JFK"], ["JFK", "ANU"], ["ANU", "EZE"], ["TIA", "ANU"], ["AXA", "TIA"], ["TIA", "JFK"], ["ANU", "TIA"], ["JFK", "TIA"]]
const c4 = [["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]]
const c5 = [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "JFK"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"], ["ATL", "AAA"], ["AAA", "BBB"], ["BBB", "ATL"]]
console.log(findItinerary(c5))

