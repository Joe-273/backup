const content = document.querySelector('#content')
const btn = document.querySelector('#btn')

const broadcastChannel = new BroadcastChannel('load')
btn.addEventListener('click', () => {
	broadcastChannel.postMessage({ value: content.value })
})
