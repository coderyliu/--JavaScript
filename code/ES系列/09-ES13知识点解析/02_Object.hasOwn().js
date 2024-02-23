// ?在Es13中新增了对Object.hasOwn()方法
// ?主要是用来判断某个对象的key是否存在，而不是在原型中
// todo 参数Object.hasOwn(obj,property)

// *在以前我们也可以通过Object.prototype.hasOwnProperty()方法来判断
// *之所以有了提案的原因大概有两方面
// todo 1.防止对象中存在的hasOwnProperty方法，而不执行Object.prototype.hasOwnProperty()
const obj={
  name:'liuyang',
  age:22,
  height:1.88,
  hasOwnProperty(){
    return 'coderyliu'
  }
}

console.log(obj.hasOwnProperty('name')) //打印的是:coderyliu,而不会返回true/false

// todo 2.某一个对象的原型上可能不存在hasOwnProperty()方法
const p=Object.create(null)//*我们通过这样的方式创建的对象的原型为null,那么就会出现报错现象
// console.log(p.hasOwnProperty('name'))

// ?所以有了Object.hasOwn()来帮助我们解决以上来个问题，并且变得规范化
console.log(Object.hasOwn(obj,'name'))//true
console.log(Object.hasOwn(obj,'WEIGHT'))//false