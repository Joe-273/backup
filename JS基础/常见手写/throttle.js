function throttle(func, wait, immediate = false) {
	let timmer = null
	let immediated = !immediate

	return function _debounce(...args) {
		let _this = this

		if (!immediated) {
			func.apply(_this, args);
			immediated = true
		}

		if (timmer) {
			return
		}

		timmer = setTimeout(() => {
			func.apply(_this, args);
			clearTimeout(timmer)
			timmer = null
		}, wait)
	}
}

// 测试代码
const input = document.createElement('input')
const div = document.createElement('div')
input.oninput = throttle((e) => {
	div.innerText = e.target.value
}, 500, true)

document.body.appendChild(input)
document.body.appendChild(div)


