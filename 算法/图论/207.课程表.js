// 由题目可以知道，课程名称为数字
// 取值范围在[0, numCourses)
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
	// 构建邻接表和入度表
	// graph 表示课程i是哪些课程的前置课程
	// indeg 表示课程i的入度数量（前置课程数量）
	const graph = new Map(), indeg = new Array(numCourses).fill(0)

	// 填充图和入度表
	for (let i = 0; i < prerequisites.length; i++) {
		const course = prerequisites[i][0]
		const pre = prerequisites[i][1]
		if (graph.has(pre)) {
			graph.get(pre).push(course);
		} else {
			graph.set(pre, [course])
		}
		indeg[course]++
	}

	const queue = [] // 可学习课程的队列
	for (let course = 0; course < indeg.length; course++) {
		// 入度数为0的课程才能学习
		if (indeg[course] === 0) {
			queue.push(course)
		}
	}

	let count = 0 // 已学课程数
	while (queue.length) {
		count++
		const curCourse = queue.shift()
		const courses = graph.get(curCourse)
		if (courses) {
			for (let i = 0; i < courses.length; i++) {
				const nextCourse = courses[i]
				indeg[nextCourse]--
				if (indeg[nextCourse] === 0) {
					queue.push(nextCourse)
				}
			}
		}
	}

	return count === numCourses
};
