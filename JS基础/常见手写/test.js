const obj = {
	a: 1, b: 2, c: 3, d: 4,
	// [Symbol.iterator]() {
	// 	const keys = Object.keys(this)
	// 	const cur = this
	// 	let index = 0
	// 	return {
	// 		next() {
	// 			return {
	// 				value: { propName: keys[index], propValue: cur[keys[index]] },
	// 				done: index++ >= keys.length,
	// 			}
	// 		}
	// 	}
	// }
	// *[Symbol.iterator]() {
	// 	const keys = Object.keys(this)
	// 	for (const key of keys) {
	// 		yield { propName: key, propValue: this[key] }
	// 	}
	// }
	*[Symbol.iterator](time) {
		let pre2 = 0, pre1 = 1
		for (let i = 0; i < time; i++) {
			const cur = pre2 + pre1
			yield cur
			pre2 = pre1
			pre1 = cur
		}
	}
}
const iterator = obj[Symbol.iterator](10)
fetch('https://study.duyiedu.com/api/user/login', {
	method: 'POST',
	headers: {
		'content-type': 'application/json'
	},
	body: JSON.stringify({ loginId: 'admin1', loginPsw: '123123' })
})
