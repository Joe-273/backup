const ws = new WebSocket('ws://localhost:3000')
const send = document.querySelector('#send')
const msg = document.querySelector('#msg')

send.onclick = () => {
	if (msg.value.trim() !== '') {
		ws.send(msg.value.trim())
	}
}

window.onbeforeunload = () => {
	ws.close()
}
