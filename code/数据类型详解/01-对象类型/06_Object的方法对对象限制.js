var obj = {
  name: 'why',
  age: 18
}

// 1.禁止对象一切可配置：添加新的属性、删除属性(configurable: false)、修改属性值(writable: false)、修改属性描述(enumerable: false)
Object.freeze(obj)
obj.height = 1.88 //报错
obj.address = "广州市" 
delete obj.height //报错

// 2. 用于检查是否冻结
console.log(Object.isFrozen(obj)) // true

console.log(obj)

// 3.禁止对象配置/删除里面的属性
// for (var key in obj) {
//   Object.defineProperty(obj, key, {
//     configurable: false,
//     enumerable: true,
//     writable: true,
//     value: obj[key]
//   })
// }

// !4. 需要注意的是Object.freeze()方法是一个浅冻结，并且不会冻结原型链上的对象，也就是说，如果对象的属性中有指向原型链上对象的引用，那么这些属性的值是可修改的。

// Object.seal()方法与Object.freeze()方法类似，不同的是，Object.sea()方法的冻结是可以修改属性值的,其他的和Object.freeze()方法一样

// Object.preventExtensions()方法可以防止对象被扩展，也就是说，对象不能添加新的属性，但可以修改属性值和属性描述。
