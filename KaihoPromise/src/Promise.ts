import { isPromise, putToQueue } from './utils.js'
import {
	Executor,
	Status,
	QueueObj,
	ResolveType,
	RejectType,
	ThenFuncType,
} from './types.js'

export class KaihoPromise {
	private _status: Status = 'pending'
	private _value: any = undefined
	private _queue: QueueObj[] = []

	private _changeStatus = (status: Status, value: any) => {
		if (this._status !== 'pending') {
			return
		}
		this._status = status
		this._value = value
		this._runQueue()
	}
	private resolve: ResolveType = (data) => {
		this._changeStatus('fulfilled', data)
	}
	private reject: RejectType = (reason) => {
		this._changeStatus('rejected', reason)
	}

	private _runFuncInQueue({ func, status, resolve, reject }: QueueObj) {
		queueMicrotask(() => {
			if (this._status !== status) {
				return
			}
			try {
				if (func) {
					const result = func(this._value)
					if (isPromise(result)) {
						result.then(resolve, reject)
					} else {
						resolve(result)
					}
				} else {
					this._status === 'fulfilled'
						? resolve(this._value)
						: reject(this._value)
				}
			} catch (error) {
				reject(error)
			}
		})
	}
	private _runQueue = () => {
		if (this._status === 'pending') {
			return
		}
		while (this._queue[0]) {
			this._runFuncInQueue(this._queue[0])
			this._queue.shift()
		}
	}
	public then = (onFulfilled: ThenFuncType, onRejected: ThenFuncType) => {
		return new KaihoPromise((resolve, reject) => {
			putToQueue(this._queue, onFulfilled, 'fulfilled', resolve, reject)
			putToQueue(this._queue, onRejected, 'rejected', resolve, reject)
			this._runQueue()
		})
	}

	constructor(private executor: Executor) {
		try {
			this.executor(this.resolve.bind(this), this.reject.bind(this))
		} catch (error) {
			this.reject(error)
		}
	}
}
