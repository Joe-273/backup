### 实时场景的旧的处理方案

要实现用户1向用户2发送消息，可以使用服务器作为中转。

旧的方案有以下两种：

1. 短轮询 short polling
    > 缺陷:
    >
    > 1. 会产生大量无意义的请求
    > 2. 频繁打开和关闭连接
    > 3. 实时性并不高

2. 长轮询 long polling

    长轮询解决了「话痨问题」，让每次的请求和响应都是有意义的。

    > 但长轮训仍然存在问题：
    >
    > 1. 客户端可能长时间收不到响应会导致超时，从而主动断开和服务器的连接
    > 2. 客户端可能过早地请求了服务器，服务器不得不挂起这个请求直到新消息的出现。这会让服务器长时间占用资源却没什么实际的事情可做。

### WebSocket

1. 下层仍然采用TCP协议，利用的是TCP协议的全双工通信能力。
2. 使用WebSocket会经历两个阶段：握手阶段，通信阶段。

WebSocket虽然优于轮询方案，但他仍有缺点：

1. 兼容性问题
    > WebSocket是HTML5新增的内容，因此古董版本的浏览器不支持。
2. 维持TCP连接是需要消耗资源的
    > 对于消息量较少的场景，维持TCP连接确实会造成资源浪费。

**WebSocket的握手过程：**

TCP连接完成三次握手后，就到了WebSocket的握手过程：

1. 客户端先使用HTTP/HTTPS协议完成一次特殊的请求

    请求地址的格式：
    ```shell
    `ws://mysite.com/path`  # 使用HTTP
    `wss://mysite.com/path` # 使用HTTPS
    ```
    请求头如下：
    ```shell
    Connection: Upgrade       # 请求升级协议
    Upgrade: websocket        # 将协议升级为websocket
    Sec-WebSocket-Version: 13 # 使用的websocket协议版本
    Sec-WebSocket-Key: RANDOM # 相当于协议暗号
    ```
    服务器如果同意，就应该有以下的响应：
    ```shell
    HTTP/1.1 101 Switching Protocols # 同意更换协议
    Connection: Upgrade              # 协议已经升级
    Upgrade: websocket               # 协议升级为了websocket 
    Sec-WebSocket-Accept: GENERAL    # 相当于协议暗号
    ```
    请求头中的 Sec-WebSocket-Key 是程序生成的， 响应头中的 Sec-WebSocket-Accept 是根据 Sec-WebSocket-Key 生成的。
