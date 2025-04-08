function debounce(fn, wait) {
	let timer = null
	return function(...args) {
		clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, wait)
	}
}

function throttle(fn, wait, immetiate = false) {
	let timer = null
	if (immetiate) {
		return function(...args) {
			if (timer && Date.now() - timer < wait) { return }
			fn.apply(this, args)
			timer = Date.now()
		}
	} else {
		return function(...args) {
			if (timer) { return }
			timer = setTimeout(() => {
				fn.apply(this, args)
				timer = null
			}, wait)
		}
	}
}
