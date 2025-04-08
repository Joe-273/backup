### 认识环境变量
- import.meta.env.BASE_URL：获取应用的基路径。
    - 开发环境中，默认值通常为：'/'。
    - 生产环境中，这个值可以根据vite.config.js文件中的base配置项来进行配置。

其他的内置环境变量：
- import.meta.env.MODE：获取当前应用运行的模式。
- import.meta.env.PROD：应用是否运行在生存环境。
- import.meta.env.DEV：应用是否运行在开发环境。
- import.meta.env.SSR：应用是否运行在server上。

### NODE_ENV和模式
代码有不同的运行环境。
1. 开发环境
2. 测试环境
3. 生产环境

不同的环境需要不通过的配置来满足需求。

那么如果指定代码的运行环境呢？
- 可以通过`NODE_ENV`这个环境变量，这个变量可以指定代码的运行环境，它的值比如可以有：`development`，`production`，`test`。

那么Vite中的**模式**又是什么？
- 在Vite中，模式是一个可以在启动时设置的属性，用来指导Vite如何加载.env文件。
