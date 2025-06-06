## 在浏览器中输入地址，按下回车后，发生什么？
1. 自动补全协议和端口号，或者进行搜索
> 如果输入的是url地址，自动补全协议和端口号  
> - 如果协议为https，端口号自动补全为443  
> - 如果协议为http，端口号自动补全为80  
> 
> 如果输入的不是网站，而是一些关键字，则会使用搜索引擎搜索

2. 浏览器自动完成url编码

3. 浏览器根据url地址查找本地缓存，根据缓存规则查找缓存，如果命中缓存，则使用缓存，不会发出请求

4. 通过DNS解析查找到服务器的IP地址

5. 浏览器向服务器发出建立TCP连接的申请，完成三次握手后，建立通道连接

6. 如果使用HTTPS协议，则还进行SSL握手，建立加密信道。使用SSL握手时，会确定是否使用HTTPS

7. 浏览器句町要附带哪些cookie到请求头中

8. 浏览器自动设置好请求头，协议版本，cookie，发出GET请求

9. 服务器处理请求，进入后端处理流程。处理完成后，服务器响应一个HTTP报文给浏览器

10. 浏览器根据使用的协议版本，以及Connection字段的约定，决定是否要保留TCP连接

11. 服务器根据响应的状态码决定如何处理这一次的响应

12. 浏览器根据响应头中的Content-Type字段识别响应类型，如果是text/html，则对响应体内容进行HTML解析，否则做其他处理

13. 浏览器根据响应头的其他内容完成缓存，cookie的设置

14. 浏览器从上到下解析HTML，如果遇到外部资源链接，则进行进一步请求资源

15. 解析过程中生成DOM树，CSSOM树，然后一边生成，一边把二者合并为渲染树，随后对渲染树的每个节点计算位置和大小（reflow，重排），最后把每个节点利用GPU绘制到屏幕（repaint）

16. 解析过程中还会触发一系列的事件，当DOM树完成后会触发DOMContentLoaded事件，当所有的资源加载完毕后会触发load事件
