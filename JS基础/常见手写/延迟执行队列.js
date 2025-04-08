class DelayedQueue {
	constructor() {
		this.tasks = [];       // 任务队列：{ fn, delay }
		this.isProcessing = false; // 是否正在执行任务
	}

	/**
	 * 添加任务到队列
	 * @param {Function} fn - 要执行的任务（支持异步）
	 * @param {number} [delay=0] - 延迟时间（毫秒）
	 * @returns {this} 支持链式调用
	 */
	add(fn, delay = 0) {
		this.tasks.push({ fn, delay })
		if (!this.isProcessing) {
			this._run()
		}
		return this
	}

	async _run() {
		if (this.isProcessing || !this.tasks.length) {
			return
		}
		const task = this.tasks.shift()
		this.isProcessing = true
		await new Promise(resolve => setTimeout(resolve, task.delay))
		try {
			await task.fn()
		} catch {
			console.error('任务失败:', error);
		}
		this.isProcessing = false
		this._run()
	}

	/** 清空队列 */
	clear() {
		this.tasks = [];
	}
}

const queue = new DelayedQueue();
// 测试动态添加任务
queue.add(() => {
	console.log('任务1开始');
	return new Promise(resolve => {
		setTimeout(() => {
			console.log('任务1结束');
			resolve();
		}, 5000);
	});
}, 1000);

// 1秒后添加新任务
setTimeout(() => {
	queue.add(() => console.log('任务2'), 500);
}, 1000);

/* 输出：
> 0秒: 任务进入队列
> 1秒后: 任务1开始（等待1秒）
> 1.5秒后: 任务1结束（执行0.5秒）
> 1.5秒后: 任务2开始（无延迟，立即执行）
*/

// const queue = new DelayedQueue();
// // 添加一个延迟 1 秒的任务
// queue.add(() => console.log('任务1'), 1000);
//
// // 0.5 秒后动态添加第二个任务
// setTimeout(() => {
// 	queue.add(() => console.log('任务2'), 3000);
// }, 500);

// const queue = new DelayedQueue();
// queue
// 	.add(() => console.log('任务1'), 1000)  // 1秒后执行
// 	.add(() => console.log('任务2'), 5000)   // 任务1完成后0.5秒执行
// 	.add(() => console.log('任务3'));       // 任务2完成后立即执行
//
// /* 输出：
// > 1秒后: 任务1
// > +0.5秒: 任务2
// > 立即: 任务3
// */

// const apiQueue = new DelayedQueue();
// // 模拟API调用
// async function callAPI(url) {
// 	console.log(`调用API: ${url}`);
// 	await new Promise(resolve => setTimeout(resolve, 5000)); // 模拟请求耗时
// 	return { data: `${url}响应` };
// }
// // 添加3个API调用任务，每个间隔至少1秒
// apiQueue
// 	.add(() => callAPI('/user'), 1000)
// 	.add(() => callAPI('/posts'), 1000)
// 	.add(() => callAPI('/comments'), 1000);
//
// /* 输出：
// > 0秒: 无
// > 1秒后: 调用API: /user
// > 2秒后: 调用API: /posts （注意实际间隔=1秒延迟+200ms请求耗时）
// > 3.2秒后: 调用API: /comments
// */

// const queue = new DelayedQueue();
// // 初始任务
// queue.add(() => console.log('初始任务'), 1000);
// // 1.5秒后动态添加新任务
// setTimeout(() => {
// 	queue.add(() => console.log('动态添加的任务'), 500);
// }, 1500);
//
// /* 输出：
// > 1秒后: 初始任务
// > 1.5秒后添加新任务 → 再0.5秒（总2秒）: 动态添加的任务
// */

// const queue = new DelayedQueue();
// queue
// 	.add(() => {
// 		console.log('任务1开始');
// 		return new Promise(resolve => {
// 			setTimeout(() => {
// 				console.log('任务1结束');
// 				resolve();
// 			}, 500);
// 		});
// 	}, 1000)
// 	.add(() => console.log('任务2'), 500);
//
// /* 正确输出：
// 1秒延迟 → 任务1开始
// 0.5秒后 → 任务1结束
// 0.5秒延迟 → 任务2
// */
