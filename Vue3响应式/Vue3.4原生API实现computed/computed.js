import { effect, trigger, track, reactive, TrackOpTypes, TriggerOpTypes } from '@vue/reactivity';

function myComputed(getterOrOptions) {
	// 解析参数：支持 getter 函数 或 { get, set } 对象
	let getter, setter;
	if (typeof getterOrOptions === 'function') {
		getter = getterOrOptions;
		setter = () => {
			console.warn('Write operation failed: computed value is readonly');
		};
	} else {
		getter = getterOrOptions.get;
		setter = getterOrOptions.set || (() => {
			console.warn('Write operation failed: computed value is readonly');
		});
	}

	let value;        // 缓存的值
	let dirty = true; // 脏数据标记
	let runner;       // 响应式 effect

	// 创建 scheduler 用于依赖变更时调度
	const scheduler = () => {
		if (!dirty) {
			dirty = true;
			// 触发依赖该 computed 的 effect
			trigger(obj, TriggerOpTypes.SET, 'value');
		}
	};

	// 创建 effect（默认 lazy 执行）
	runner = effect(getter, {
		lazy: true,
		scheduler
	});

	const obj = {
		get value() {
			if (dirty) {
				// 重新计算并缓存值
				value = runner();
				dirty = false;
			}
			// 收集依赖
			track(obj, TrackOpTypes.GET, 'value');
			return value;
		},
		set value(newVal) {
			setter(newVal);
		}
	};

	return obj;
}

const s = reactive({ a: 1, b: 2 })
const sum = myComputed(() => {
	console.log('run')
	return s.a + s.b
})
effect(() => {
	console.log('RENDER', sum.value)
})

s.a = 23
