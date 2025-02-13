## 事件捕获以及事件冒泡
当前的浏览器捕获事件分为两个阶段：**捕获阶段** 和 **冒泡阶段**  

**捕获阶段**：浏览器从最不具体的元素（对象）逐渐捕获到具体的元素（对象）  

下面的代码中，当我们点击button的时候，当前的谷歌浏览器（2024）会从`window`对象开始捕获  
依次是：  
`window -> document -> html -> body -> div -> button`

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Event</title>
</head>

<body>
	<div>
		<button type="button">Click</button>
	</div>
</body>

</html>
```
**冒泡阶段**：当浏览器捕获到最具体的元素的时候，开始向上冒泡，**并在这个阶段触发相应的事件函数**  

下面的代码中，当我们点击button，并且捕获到最具体元素（button）后，开始冒泡，依次是：  
`button -> div -> body -> html -> document -> window`  

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Event</title>
</head>

<body>
	<div>
		<button type="button">Click</button>
	</div>
	<script>
		const div = document.getElementsByTagName('div')[0]
		const button = document.getElementsByTagName('button')[0]

		document.body.addEventListener('click', () => console.log('Body'))
		div.addEventListener('click', () => console.log('Div'))
		button.addEventListener('click', () => console.log('Button'))
	</script>
</body>

</html>
```
点击Button后，代码执行的结果为：  
```txt
Button
Div
Body
```
