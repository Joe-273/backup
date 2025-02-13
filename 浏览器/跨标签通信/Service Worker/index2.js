navigator.serviceWorker.register('sw.js').then(() => {
	console.log('SW 注册成功')
})
navigator.serviceWorker.addEventListener('message', (e) => {
	console.log(e.data)
})
