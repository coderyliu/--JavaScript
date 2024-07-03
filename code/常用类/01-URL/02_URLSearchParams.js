// ?URLSearchParams也是一个类，javascript提供给我们方便的处理url后面的search参数

// todo 简单使用 new URLSearchParams(location.search)传入一个search

const searchParams = new URLSearchParams(location.search);

console.log(searchParams); //一个实例对象

// ?这个实例对象上面有很多属性和方法
// todo 1.添加search
searchParams.set("name", "coder");
searchParams.set("age", 18);

// todo 2.获取key
console.log(searchParams.get("name"));

// todo 3.是否有key
console.log(searchParams.has("name")); //true

// todo 4.删除key
// searchParams.delete('name')

// todo 5.获取所有
// searchParams.getAll()

// !searchParams是一个对象，是一个可迭代对象，我们可以遍历获取值
for (const params of searchParams) {
  console.log(params); //key value
}
