// Test the KaihoPromise

import { KaihoPromise } from './Promise.js'

const promise1 = new KaihoPromise((resolve, _) => {
	setTimeout(() => {
		resolve(666)
	}, 1000)
})
const promise2 = promise1.then(undefined, () => {
	return 2
})

console.log('promise1', promise1)
console.log('promise2', promise2)

setTimeout(() => {
	console.log('promise1', promise1)
	console.log('promise2', promise2)
}, 2000)
