const WebSorketServer = require('ws').Server

const wss = new WebSorketServer({ port: 3000 })

const clients = []

wss.on('connection', (client) => {
	clients.push(client)
	console.log('>>', clients.length)

	client.on('message', (msg) => {
		console.log('>>', msg.toString())
		for (var c of clients) {
			if (c !== client) {
				c.send(msg.toString())
			}
		}
	})


	client.onclose = () => {
		const i = clients.indexOf(this)
		clients.splice(i, 1)
		console.log('>>', clients.length)
	}
})

console.log("WS Start")
