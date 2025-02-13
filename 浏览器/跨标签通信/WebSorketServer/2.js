const ws = new WebSocket('ws://localhost:3000')
let count = 1
ws.onopen = () => {
	ws.onmessage = (e) => {
		const op = document.createElement('p')
		op.innerHTML = `the ${count} times get message: ${e.data}`
		document.body.appendChild(op)
		count++
	}
}

window.onbeforeunload = () => {
	ws.close()
}
