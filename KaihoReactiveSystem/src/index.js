import { reactive } from './reactive.js'
import { effect } from './effects/effect.js'
import { computed } from './computed.js'
import { watch } from './watch.js'

const s = reactive({ a: 1, b: 2 })
const c = computed(() => {
	console.log('Computed')
	return s.a + s.b
})

watch(
	() => s.a + s.b,
	(oldV, newV) => {
		console.log(oldV, newV)
	},
	{
		immediate: true,
		// once: true,
	},
)
s.a = 1000
s.a = 1001
s.a = 1002
