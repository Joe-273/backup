function get(obj, path, defaultValue = undefined) {
	const key = path.replace(/\[(\"\w*\"|\'\w*\'|\d+)\]/g, '.$1');
	console.log(key)
}
const o = {
	a: {
		b: {
			c: {
				d: 1
			}
		}
	}
}

get(o, 'a["b"].c[d][0][66][""].b.66')
"a['strange[\'key']]"
