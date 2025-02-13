## 手写Promise

代码实现如下：
```js
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const __value = Symbol('value')
const __state = Symbol('state')
const __stack = Symbol('stack')

// 辅助函数：
    // 判断一个对象是不是PromiseLike
    // 也就是这个对象是否是thenable，即实现了一个 then 方法
function isPromise(t) {
	return !!t && typeof t === 'object' && typeof t?.then === 'function'
}

// 自定义 Promise 类
class CDPromise {
	constructor(excutor) {
		this[__state] = PENDING
		this[__value] = undefined
		Object.defineProperty(this, __stack, {
			value: [],
			writable: true,
			enumerable: false
		})
		try {
			excutor(this._resolve.bind(this), this._reject.bind(this))
		} catch (error) {
			this._reject(error)
			console.error(error)
		}
	}

    // thenable 的实现
	then(onFulfilled, onRejected) {
		return new CDPromise((resolve, reject) => {
            // 将 onFulfilled 和 onRejected 函数推入执行队列中，并且尝试运行他们
			this._pushToStack(FULFILLED, onFulfilled, resolve, reject)
			this._pushToStack(REJECTED, onRejected, resolve, reject)
			this._runFromStack()
		})
	}
	// 将函数推入执行队列中
	_pushToStack(stateToRun, func, resolve, reject) {
		this[__stack].push({ stateToRun, func, resolve, reject });
	}
	// 依次执行队列中的任务
	_runFromStack() {
		if (this[__state] === PENDING) {
			return
		}
		// 如果__stack中第一项有值，继续执行
		while (this[__stack][0]) {
			const currentTask = this[__stack].shift()
			this._runTask(currentTask)
		}
	}
	// 执行队列中的具体任务的具体过程
	_runTask(task) {
		// 将任务推入微队列中执行
		queueMicrotask(() => {
			const stateToRun = task.stateToRun

			// 筛选与待执行状态相同的任
			if (stateToRun !== this[__state]) {
				return
			}
			// 如果任务并非一个函数，则状态与数据与其父级Promise保持一致
			if (typeof task.func !== 'function') {
				const stateToChange = stateToRun === FULFILLED ? task.resolve : task.reject
				stateToChange(this[__value])
				return
			}

			try {
				const value = task.func.call(null, this[__value])
				if (isPromise(value)) {
					// 如果返回值是一个Promise
					// 则当前Promise状态与数据跟这个返回的Promise保持一致
					value.then(task.resolve, task.reject)
				} else {
					task.resolve(value)
				}
			} catch (error) {
				task.reject(error)
				console.error(error)
			}
		})
	}

	_changeStatus(state, value) {
		if (this[__state] !== PENDING) {
			return
		}
		this[__state] = state
		this[__value] = value
		this._runFromStack()
	}
	_resolve(value) {
		this._changeStatus(FULFILLED, value)
	}
	_reject(reason) {
		this._changeStatus(REJECTED, reason)
	}
	// 以上是Promise A+规范实现内容

	// 以下是ES6的Promise新增方法
	catch(onRejected) {
		return this.then(null, onRejected)
	}

	finally(onSettled) {
		return this.then((data) => {
			onSettled()
			return data
		}, (reason) => {
			onSettled()
			throw reason
		})
	}

    // resolve 静态方法的实现：
        // 如果传入的是一个Promise
        //（所在类的实例对象，这里是CDPromise的实例）
            // 则直接返回这个实例对象
        // 否则返回一个Promise（这里是CDPromise的实例）
            // 如果传入的是一个PromiseLike
            //（非CDPromise且实现了Promise的类的实例，比如ES6原生的Promise）
                // 则调用这个传入的Promise的then方法，让这个then方法来调用返回的Promise的 resolve 和 reject 
            // 否则直接 resolve 这个传入的数据
	static resolve(data) {
		// 如果是参数为自身的Promise，则直接返回这个Promise
		if (data instanceof CDPromise) {
			return data
		}
		// 否则也返回一个Promise
		return new CDPromise((resolve, reject) => {
			if (isPromise(data)) {
				// 如果参数是一个PromiseLike，也就是实现了thenable的非自身Promise，状态跟其保持一致
				// 这里的自身Promise指CDPromise
				data.then(resolve, reject)
			} else {
				// 其他情况，返回一个完成的Promise
				resolve(data)
			}
		})
	}

	static reject(reason) {
		return new CDPromise((_, reject) => reject(reason))
	}

	// 传入一个promise的可迭代对象：promises
	static all(promises) {
		return new CDPromise((resolve, reject) => {
			try {
				const promisesResultArr = [] // 存放每个promise
				let count = 0 // 记录promise的个数
				let suceessCount = 0 //记录成功的promise个数
				for (const promise of promises) {
					let i = count
					if (!isPromise(promise)) {
						resolve(promise)
					} else {
						promise.then((data) => {
							promisesResultArr[i] = data
							suceessCount++
							// 当所有的promise成功
							if (suceessCount === count) {
								resolve(promisesResultArr)
							}
						}, reject)
					}
					count++
				}
				if (count === 0) {
					resolve(promisesResultArr)
				}
			} catch (error) {
				reject(error)
			}
		})
	}

	static allSettled(promises) {
		const promisesResultArr = []
		for (const promise of promises) {
			let r
			if (!isPromise(promise)) {
				r = CDPromise.resolve(promise)
			} else {
				r = promise.then(
					value => ({ status: FULFILLED, value, }),
					reason => ({ status: REJECTED, reason })
				)
			}
			promisesResultArr.push(r)
		}
		return CDPromise.all(promisesResultArr)
	}

	static race(promises) {
		return new CDPromise((resolve, reject) => {
			for (const promise of promises) {
				if (!isPromise(promise)) {
					resolve(promise)
				} else {
					promise.then(resolve, reject)
				}
			}
		})
	}
}
```
