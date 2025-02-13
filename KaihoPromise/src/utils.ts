import {
	Status,
	QueueObj,
	ResolveType,
	RejectType,
	ThenFuncType,
} from './types.js'

export const isPromise = (obj: any) => {
	return typeof obj === 'object' && typeof obj?.then === 'function'
}

export const putToQueue = (
	queue: QueueObj[],
	func: ThenFuncType,
	status: Status,
	resolve: ResolveType,
	reject: RejectType,
) => {
	queue.push({ func, status, resolve, reject })
}
