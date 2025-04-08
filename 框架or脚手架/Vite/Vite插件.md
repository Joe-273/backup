### 常用的Vite插件
1. 官方插件
    - @vitejs/plugin-vue：提供对Vue3的支持，处理单文件组件（.vue文件）。
    - @vitejs/plugin-react：提供对React的支持，包括快速的热模块替换（HMR）。
    - @vitejs/plugin-legacy：提供对浏览器的支持，通过为现代语法和特性提供传统浏览器兼容性脚本。

2. 社区插件

3. rollup插件
    > 因为Vite在生产阶段采用的是rollup，因此rollup插件也可以在Vite项目中使用。

### 自定义Vite插件

1. Vite插件的扩展了rollup接口，然后带有一些Vite独有的配置项。所以想要自定义Vite插件，建议先了解rollup插件开发。

2. 还需要了解一些生命周期钩子方法，不同的钩子在不同的时间点被调用，这为插件开发者提供了接入rollup的
