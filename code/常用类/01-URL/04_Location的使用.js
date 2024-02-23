// ?浏览器BOM对象还给我们提供了Location来操作BOM(浏览器)

// ?直接使用location实例对象即可
console.log(location.hash)
console.log(location.pathname)
console.log(location.port)
console.log(location.protocol)
console.log(location.search)
console.log(location.host)
console.log(location.hostname)
console.log(location.href)//!整个url
console.log(location.origin)//!baseURL

// todo 我们可以通过location.href=newURL 来改变浏览器的导航
// todo Location上还有几个实例方法
// location.reload()//重新加载
// location.replace('http://www.baidu.com') 用新的url替换当前url