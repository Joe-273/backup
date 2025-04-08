## 源码上的变化

### 源码工程变化
- Vue2:  
Vue2的所有源码都是托管在工程目录的src目录下的，即整个Vue2的源码工程仅有一个包。

- Vue3:  
Vue3的源码工程采用Monorepo的形式，即一仓多包，Vue3不同的模块被分为了不同的包，比如说`reactivity`这个响应式模块的包，就被单独分为了一个包，这样能够做到不同的包可以单独测试，单独发布。

### 类型系统变化
> Vue3采用了Typescript

Vue1采用的是纯原生的js来进行开发的。  
Vue2的类型采用的是Flow.js来进行类型检查，是由facebook推出的类型系统。  
Vue3的类型系统使用了Typescript，整个Vue3的源码都使用Typescript进行重构。

## 性能上的变化

### 源码体积缩小
- Vue3移除一些Vue2的冷门功能，比如filter，inline-template  
- Vue3的生产环境采用了Rollup进行构建，使用Tree-Shaking减少了最终打包体积  

### 数据劫持的优化
- Vue2采用了`Object.defineProperty`API来进行数据劫持
- Vue3采用了`Proxy`来进行数据劫持

### 编译优化
Vue的目标本质上就是语法糖，最终会被Vue的编译器编译为渲染函数。  

### diff算法的优化
- Vue2采用了双端diff算法
- Vue3采用了快速diff算法

## 语法API优化

### 优化逻辑组织
- Vue2采用了OptionsAPI
    > OptionsAPI的逻辑代码按照data，methods，computed，props等来进行分类。

- Vue3采用了OptionsAPI + CompositionAPI
    > CompositionAPI的优点：  
    > 逻辑代码可更自由地划分，更有利于不同功能区域对应的逻辑代码的划分。  
    > 并且CompositionAPI更有利于逻辑复用。  

### 优化逻辑复用
- Vue2的逻辑复用使用的是mixin，但mixin本身有些缺点：
    - 不清晰的数据来源
    - 很可能会造成命名空间的冲突
    - 隐式的跨mixin交流

### 其他变化
- Vue2是通过实例化Vue来创建应用
    ```vue
    <div id="app1"></div>
    <div id="app2"></div>
    <script>
        // 以下三行代码会影响所有的Vue应用
        Vue.use(...)
        Vue.mixin(...)
        Vue.component(...)

        new Vue({
            // ...
        }).$mount('#app1')

        new Vue({
            // ...
        }).$mount('#app2')
    </script>
    ```

- Vue3是通过了`createApp`这个函数来创建Vue应用
    ```js
    import { createApp } from 'vue'
    import App from './App.vue'

    createApp(App).mount('#app')
    ```

## 引入了RFC
