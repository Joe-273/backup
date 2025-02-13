const content = document.querySelector('#content')
const btn = document.querySelector('#btn')

navigator.serviceWorker.register('sw.js').then(() => {
	console.log('SW 注册成功')
})
btn.addEventListener('click', () => {
	navigator.serviceWorker.controller.postMessage({ value: content.value })
})

