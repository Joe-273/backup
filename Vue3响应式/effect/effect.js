export const targetMap = new WeakMap()
export let activeEffect = null
const effectStack = []

export function cleanup(_effect) {
	while (_effect.deps.length) {
		const depsSet = _effect.deps.pop()
		depsSet.delete(_effect)
	}
}

export function effect(fn, opts = {}) {
	function _effect() {
		try {
			activeEffect = _effect
			effectStack.push(_effect)
			cleanup(_effect)
			return fn()
		} finally {
			effectStack.pop()
			activeEffect = effectStack.at(-1)
		}
	}
	_effect.deps = []
	_effect.opts = opts

	if (!opts.lazy) {
		_effect()
	}

	return _effect
}
