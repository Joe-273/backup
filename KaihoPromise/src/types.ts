export type Status = 'pending' | 'fulfilled' | 'rejected'
export type ResolveType = (value?: any) => any
export type RejectType = (reason?: any) => any
export type ThenFuncType = ((value?: any) => any) | undefined
export type Executor = (resolve: ResolveType, reject: RejectType) => any
export type QueueObj = {
	func: ThenFuncType
	status: Status
	resolve: ResolveType
	reject: RejectType
}
