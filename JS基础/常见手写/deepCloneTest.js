const deepClone = require('./deepClone')

// 测试数字、字符串、布尔、null、undefined
const test1 = {
	num: 42,
	str: 'hello',
	bool: true,
	nul: null,
	undef: undefined
};
const cloned1 = deepClone(test1);

console.log(cloned1.num === 42);          // true
console.log(cloned1.str === 'hello');     // true
console.log(cloned1.bool === true);       // true
console.log(cloned1.nul === null);        // true
console.log(cloned1.undef === undefined); // true
console.log(cloned1 !== test1);           // true (非同一引用)
console.log('---------------------------------------')

// 测试多层嵌套结构
const test2 = {
	arr: [1, { nested: 'obj' }, [3]],
	obj: {
		child: {
			grandchild: [new Date()]
		}
	}
};
const cloned2 = deepClone(test2);

console.log(cloned2.arr !== test2.arr);                // true (数组引用不同)
console.log(cloned2.arr[1] !== test2.arr[1]);          // true (嵌套对象引用不同)
console.log(cloned2.obj.child.grandchild !== test2.obj.child.grandchild); // true
console.log(cloned2.obj.child.grandchild[0].getTime() === test2.obj.child.grandchild[0].getTime()); // true (日期值相同)
console.log('---------------------------------------')

// 测试特殊对象类型
const test3 = {
	date: new Date(),
	regex: /abc/gi,
	set: new Set([1, 2, 3]),
	map: new Map([['key', 'value']])
};
const cloned3 = deepClone(test3);

console.log(cloned3.date !== test3.date);              // true (日期对象引用不同)
console.log(cloned3.date.getTime() === test3.date.getTime()); // true (日期值相同)
console.log(cloned3.regex.source === test3.regex.source);    // true (正则表达式相同)
console.log(cloned3.set !== test3.set);                // true (Set引用不同)
console.log(cloned3.set.has(2));                       // true (Set内容正确)
console.log(cloned3.map.get('key') === 'value');       // true (Map内容正确)
console.log('---------------------------------------')

// 测试函数和 Symbol
const test4 = {
	func: function() { return 'test'; },
	symbol: Symbol('unique')
};
const cloned4 = deepClone(test4);

console.log(cloned4.func !== test4.func);              // true (函数引用不同，或取决于实现是否拷贝函数)
console.log(cloned4.func() === 'test');                // true (函数功能一致)
console.log(cloned4.symbol === test4.symbol);          // true (Symbol 是唯一的，应保持相同，或取决于实现)
console.log('---------------------------------------')

// 测试循环引用
const test5 = { a: 1 };
test5.self = test5; // 循环引用
const cloned5 = deepClone(test5);

console.log(cloned5.self === cloned5);                 // true (拷贝后的循环引用指向自身)
console.log(cloned5 !== test5);                        // true (与原对象不同)
console.log('---------------------------------------')

// 测试原型链
function Person(name) {
	this.name = name;
}
const person = new Person('Alice');
const cloned6 = deepClone(person);

console.log(cloned6.name === 'Alice');                 // true
console.log(cloned6 instanceof Person);                // true (原型链一致，或取决于实现)
console.log(cloned6 !== person);                       // true
console.log('---------------------------------------')

// 测试不可枚举属性、Buffer（Node.js）、DOM元素（浏览器）
const test7 = {};
Object.defineProperty(test7, 'hidden', {
	value: { data: 'secret' },
	enumerable: false
});
Object.defineProperty(test7, 'good', {
	get() { },
	set() { },
	enumerable: false
});
// 浏览器环境：
// test7.element = document.createElement('div');

const cloned7 = deepClone(test7);

console.log(cloned7.hidden.data === 'secret'); // true (不可枚举属性被拷贝)
console.log(cloned7.hidden !== test7.hidden)   // true 对象地址不同
