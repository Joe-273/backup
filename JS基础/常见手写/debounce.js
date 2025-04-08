function debounce(func, wait, immediate = false) {
	let timmer = null
	let immediated = !immediate

	return function _debounce(...args) {
		let _this = this

		if (timmer) {
			clearTimeout(timmer)
			timmer = null
		}

		if (!immediated) {
			func.apply(_this, args);
			immediated = true
		}

		timmer = setTimeout(() => {
			func.apply(_this, args);
		}, wait)
	}
}

// 测试代码
const input = document.createElement('input')
const div = document.createElement('div')
input.oninput = debounce((e) => {
	div.innerText = e.target.value
}, 1000, false)

document.body.appendChild(input)
document.body.appendChild(div)


