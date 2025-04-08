import { curry } from './柯里化函数.js'

// 基础功能测试
const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3)); // 6
console.log(add(1, 2)(3)); // 6

const _ = curry._

// 占位符测试
console.log(add(_, 2)(1)(3)); // 6
console.log(add(_, _, 3)(1)(_, 4)(2)); // 1+2+3=6（最后一个4被忽略）

// 上下文测试
const obj = {
	value: 10,
	sum: function(a, b, c) {
		return this.value + a + b + c;
	}
};
console.log(curry.call(obj, obj.sum)(1)(_, 3)(2)); // 10+1+2+3=16

// 多实例隔离测试
const add5 = add(2, _, 3);
const add6 = add(1, _, _);
console.log(add5(5)); // 2+5+3=10
console.log(add6(2)(3)); // 1+2+3=6

// 超长参数测试
const log = curry((a, b) => console.log(a, b));
log('hello')(_, 'world'); // 输出 hello world
