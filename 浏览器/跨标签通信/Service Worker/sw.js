self.addEventListener('message', async (e) => {
	const clients = await self.clients.matchAll();
	clients.forEach(client => {
		client.postMessage(e.data)
	})

})
