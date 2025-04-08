function reconstructQueue(people: number[][]): number[][] {
	// 使用splice方法
	people.sort((a, b) => a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1])
	let ans: number[][] = [];
	people.forEach(person => ans.splice(person[1], 0, person))
	return ans;

	// 原地算法
	// people.sort((a, b) => a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1])
	// people.forEach(([_, k], i) => insert(i, k))
	// return people
	//
	// function insert(from: number, to: number) {
	// 	if (from === to) { return }
	// 	const temp = people[from]
	// 	if (from < to) {
	// 		for (let i = from; i < to; i++) {
	// 			people[i] = people[i + 1]
	// 		}
	// 	} else {
	// 		for (let i = from; i > to; i--) {
	// 			people[i] = people[i - 1]
	// 		}
	// 	}
	// 	people[to] = temp
	// }
};

console.log(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]));

