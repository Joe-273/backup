export let activeEffect = null
export const targetMap = new WeakMap()

const effectStack = []

export function cleanup(envirenment) {
	const depsSets = envirenment.deps
	if (depsSets.length) {
		depsSets.forEach((depsSet) => {
			depsSet.delete(envirenment)
		})
		depsSets.length = 0
	}
}

export function effect(fn, opts = {}) {
	const { lazy = false } = opts

	function envirenment() {
		try {
			activeEffect = envirenment
			effectStack.push(envirenment)
			cleanup(envirenment)
			return fn()
		} finally {
			effectStack.pop()
			activeEffect = effectStack[effectStack.length - 1]
		}
	}

	envirenment.deps = []
	envirenment.opts = opts

	if (!lazy) {
		envirenment()
	}

	return envirenment
}
