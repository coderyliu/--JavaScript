// ?什么是URL类呢?
// *有些时候我们直接从网页获取部分url就可以了,比如:vue中通过vue-router,react中通过react-router-dom来操作就可以了
// *但是有些时候我们也可以直接使用URL来创建一个新的url对象，帮助我们做更多的事情:

// todo 1.URL类的简单使用
const url='http://www.coderyliu.online:3000/hot/sing?name="coder"&age=18'

// todo new URL(url,[base]) 
// todo 要求我们传入两个参数，也可以是一个；第一个参数可以是一个路径，但是必须在base中设置baseURL
const newUrl=new URL(url)
console.log(newUrl)//!这是一个url实例对象

// todo 2.实例方法/属性
console.log(newUrl.hash)//undefined
console.log(newUrl.protocol)//http
console.log(newUrl.port)//3000
console.log(newUrl.host)//www.coderyliu.online:3000
console.log(newUrl.hostname)//www.coderyliu.online
console.log(newUrl.pathname)///hot/sing
console.log(newUrl.username)//undefined
console.log(newUrl.password)//undefined

// !注意：url.searchParams返回的是一个URLSearchParams的实例对象
console.log(newUrl.search)//search返回的是字符串
console.log(newUrl.searchParams)