## this 指向

在绝大多数情况下，函数的调用方式决定了 this 的值（运行时绑定）  
<u>this 不能在执行期间被赋值</u>，并且在每次函数被调用时 this 的值也可能会不同。  

> 在全局作用域中，this 的指向为 `window` / `global`  
> 但在严格模式下，在全局作用域中 this 的指向为 `undefined`

## 函数中的 this

在函数内部，this 的值取决于函数如何被调用。  
```js
function getThis() {
  return this;
}
const o = { name: 'Joe' }
o.getThis = getThis

getThis() // -> window/global
o.getThis() // -> { name: 'Joe' }

// 在严格模式下
'use strict'
getThis() // -> undefined
```
可以将 this 看作是函数的一个隐藏参数（就像函数定义中声明的参数一样），  
this 是语言在函数体被执行时为你创建的绑定。  

## 箭头函数的this指向

箭头函数本身没有 this，在箭头函数中使用的 this，实际上是一个**自由变量**  
箭头函数中的this实际上是来自**作用域链**上的，也就是箭头函数中 this 的指向由当前**词法作用域**决定
```js
const getThis = () => {
  return this
}
const o = { name: 'Joe' }
o.getThis = getThis

getThis() // -> window/global
o.getThis() // -> window/global

// 在严格模式下
'use strict'
getThis() // -> undefined
```



