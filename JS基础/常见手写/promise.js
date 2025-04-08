class Promise_ {
	all(promises) {
		return new Promise_((resolve, reject) => {
			try {
				let count = 0
				let fulfillCount = 0
				const res = []
				for (const promise of promises) {
					let curIndex = count
					count++
					Promise_.resolve(promise).then(data => {
						fulfillCount++
						res[curIndex] = data
						if (fulfillCount === count) {
							resolve(res)
						}
					}, reject)
				}
				if (count === 0) {
					resolve(res)
				}
			} catch (error) {
				reject(error)
			}
		})
	}
}
