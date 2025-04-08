### SSL,TLS,HTTPS的关系

SSL（Secure Sockets Layer）安全套接字协议

TLS（Transport Layer Security）传输层安全性协议

HTTPS（Hyper Text Transfer Protocal over SecureSocket Layer）建立在SSL协议上的HTTP协议

### HTTPS的对称加密过程

HTTPS采用混合加密体系，结合对称加密与非对称加密的优势：
1. 非对称加密：用于握手阶段，为了安全交换对称密钥
2. 对称加密：用于数据传输阶段，加密实际传输的内容
    1. SSL/TLS握手协议对称密钥
        1. 客户端发起请求
        2. 服务器响应
        3. 交换密钥
    2. 使用对称密钥加密通信
