## Vite是什么？
**脚手架与构建工具的定义**  
- 脚手架：帮助我们搭建开发环境的项目代码的工具。
- 构建工具：将代码从开发环境构建到生产环境。

**构建工具的发展**

1. 第一代构建工具：以npm scripts，grunt，gulp为代表的构建工具，这一代构建工具所做的事情主要就是编译，合并以及压缩等工作。
2. 第二代构建工具：以browserify，webpack，parcel，rollup为代表的构建工具。这一代构建工具加强了对模块的处理，能够对模块的依赖关系进行处理，对模块进行合并并且打包。
3. 第三代构建工具：主要就是往“绣化”的方向发展。使用Rust将前端工具链全部重构一遍。
    - Babel -> swc
    - PostCss -> lightingCss
    - Electron -> Tauri
    - ESLint -> dprint
    - Webpack -> Turbopack, Rspack
    - Rollup -> Rolldown

**脚手架的发展**

> 脚手架本身是帮助开发者搭建开发环境项目的工具，但是现代脚手架往往内置构建工具。
- VueCLI：内置了Webpack作为构建工具。
- CreateReactApp：内置了Webpack作为构建工具。

所以目前脚手架跟构建工具的界限比较模糊了，现在可以认为构建工具是脚手架工具里的一部分。

## Vite核心原理
1. Webpack的痛点在哪里？
    - 在构建大型项目的时候，非常慢。因为在启动Webpack项目的时候，Webpack会对项目进行打包，然后运行打包后的文件。
2. Vite是如果解决的？
    - Vite完全跳过了打包步骤，而是利用了浏览器的imports机制，按需获取内容。大概的步骤是现将开发服务器启动，然后我们需要什么文件，服务器就通过发送请求的方式来请求我们需要的文件。
    - 像.vue这样的文件，Vue的编译器会先将文件内容编译为JS文件后再返还给服务器。
    - 关于Vite的热更新的实现，Vite的底层主要是使用Websocket来实现的。
