Array.prototype.__reduce = function(cb, pre) {
	pre = pre || this[0]
	for (let i = 1; i < this.length; i++) {
		pre = cb(pre, this[i], i, this)
	}
	return pre
}

const arr = [1, 12, 23, 4, 5, 6, 7, 8, 9]
arr.reduce((pre, cur) => {
	console.log(pre, cur)
})

console.log('----------')

arr.__reduce((pre, cur) => {
	console.log(pre, cur)
})
