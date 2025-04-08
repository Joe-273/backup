### 共享配置

1. root  
用于定义index.html所在的目录，默认为项目根目录。

2. define  
用于定义全局常量替换。被定义为全局便令后，意味着不需要通过import来倒入，可以直接使用。

3. resolve  
    - `alias`：用于配置路径别名。
    - `extensions`：用于配置导入时省略文件扩展名时，尝试的文件扩展名列表。

4. css  
    - `postcss`：用于配置PostCSS行为，可以是内联的PostCSS配置，也可以是自定义目录。

    - `preprocessorOptions`：用于配置CSS预处理器，文件扩展名用于作为键作为设置选项。

    - preprocessorOptions.`additionalData`：用于为CSS预处理器添加一些全局样式，全局变量，全局混合器等等。

    - `preprocessorMaxWorkers`：用于配置CSS预处理器在worker中运行的数量。可以配置number值，也可配置boolean值，比如设置为true的时候表示CPU数量-1。

    - `devSourcemap`：用于配置是否启用源码地图。

    - `transformer`：用于指定CSS的处理引擎。`'postcss'` | `'lightingcss'`

5. base  
用于配置开发环境和生产环境基本的公共路径。

### 服务器配置

服务器配置指的是开发服务器，对应配置项是`server`。

- server.`host`：配置开发服务器监听的IP地址，默认为localhost。除了localhost以外，我们可能还会设置为`0.0.0.0`或者`true`的情况，表示监听所有的网络接口请求。有时候需要多设备来测试应用。

- server.`port`：配置开发服务器监听的端口号，默认为5173。

- server.`strictPort`：Vite将严格使用指定端口，如果已经被占用，则服务器启动失败。

- server.`proxy`：用于配置代理配置。

- server.`open`：配置是否自动在浏览器中打开应用。

- server.`https`：配置是否启用HTTPS，可以自己指定SSL证书和私钥路径。

- server.`watch`：用于配置自定义文件监视器的选项。对于开发过程中的热模块替换（HMR）非常关键。背后使用的是chokidar，一个Node.js的文件系统监听库，它提供了多种可配置的监听选项。


### 构建配置

构建生产环境代码的可能需要的自定义配置项，对于的是`build`

- build.`target`：用于配置打包出来的代码对于的转移级别。默认值为`'modules'`,意味着构建出来的产物适用于现代支持的ESM的浏览器。
    > esbuild虽然很快，但可能不支持某些复杂的或尚未广泛采用的JS特性。如果遇到此类esbuild不支持的特性，可能需要babel来做补充编译。

- build.`outDir`：用于指定构建产物的存放目录。默认是根目录下的dist目录。

- build.`assetsDir`：用于指定静态资源存放的目录。

- build.`cssMinify`：用于单独控制CSS文件的最小化压缩方式，独立于JS的压缩设置。
    - 默认是采用esbuild来做CSS压缩。
    - 可以使用lightingcss来压缩CSS。
    - 也可以禁止CSS压缩。

- build.`minify`：用于控制JS代码的压缩和混淆。默认使用esbuild来进行压缩。
    - esbuilder比terser快20-40倍，压缩率只差1%-2%。
    - 但terser提供了更细致的控制和稍微更好的压缩率。

- build.`sourcemap`：用于配置源码地图。

- build.`rollupOptions`：因为底层使用的是rollup进行打包，所以支持所有的rollup配置选项。

- build.`lib`：用于配饰库模式打包的配置。
