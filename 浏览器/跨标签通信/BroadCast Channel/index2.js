const broadcastChannel = new BroadcastChannel('load')
broadcastChannel.onmessage = (e) => console.log(e.data)
