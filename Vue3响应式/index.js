import { effect } from "./effect/effect.js";
import { reactive } from "./reactive.js";

const o1 = reactive({ a: 1 })
const o = reactive({ a: [o1, 2, 3, 4, 5], b: 2, c: { d: 3, e: 4 } })

// get
// o.c.d
// 'd' in o.c
// for (const k in o) { }
// o.a.length = 1
// console.log(o.a.includes(o1))
// o.ff = 777
const s = {
	a: 1,
	b: 2,
	c: 3
}
const ss = reactive(s)


let timer = null
const fn1 = effect(() => {
	ss.a = ss.a + 1
	console.log('>>>>', ss.a)
}, {
	lazy: true,
	scheduler(effect) {
		if (timer) {
			return
		}
		timer = setTimeout(() => {
			clearTimeout(timer)
			timer = null
			effect()
		}, 300)
	}
})


fn1()

ss.a++
ss.a++
ss.a++
ss.a++
ss.a++
ss.a++
