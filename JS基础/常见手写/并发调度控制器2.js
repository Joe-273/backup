class Scheduler {
	constructor(maxExcutingNum) {
		this.maxExcutingNum = maxExcutingNum
		this.curExcutingNum = 0
		this.queue = []
	}

	// 这里要求返回一个Promise
	add(promiseMaker) {
		return new Promise((resolve, reject) => {
			this.queue.push({ promiseMaker, resolve, reject })
			this._run()
		})
	}

	async _run() {
		if (this.curExcutingNum === this.maxExcutingNum) {
			return
		}
		if (!this.queue.length) {
			return
		}
		const { promiseMaker, resolve, reject } = this.queue.shift()
		this.curExcutingNum++
		try {
			await promiseMaker()
			resolve()
		} catch {
			reject()
		} finally {
			this.curExcutingNum--
			this._run()
		}
	}
}

const timeout = (time) =>
	new Promise((resolve) => {
		setTimeout(resolve, time)
	})

const scheduler = new Scheduler(2)
const addTask = (time, order) => {
	scheduler.add(() => timeout(time))
		.then(() => console.log(order))
}

addTask(1000, "1")
addTask(500, "2")
addTask(300, "3")
addTask(400, "4")
// output：2 3 1 4
// 一开始，1，2两个任务进入队列。
// 500ms 时，2完成，输出2，任务3入队。
// 800ms 时，3完成，输出3，任务4入队。
// 1000ms 时，1完成，输出1。
