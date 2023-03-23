//原型链和继承
function A(){}

A.prototype.a=1
let B=new A()
A.prototype={
  b:2,
  c:3
}
let C=new A()
A.prototype.d=4
console.log(B.a)//1
console.log(B.b)//undefined
console.log(C.c)//3
console.log(C.d)//4

//数据属性描述符
const obj={
  price:'9999',
  name:'liu'
}
Object.defineProperty(obj,'price',{
  configurable:false//这个属性为false之后，是不能删除和修改属性描述符的配置
})
Object.defineProperty(obj,'id',{
  value:-1
})
console.log(Object.keys(obj).length)//2
for(const item in obj){
  console.log(item)
}

obj['price']='1999'
delete obj['price']
// 修改configurable属性后，不能在修改该属性的属性描述符，否则报错
// Object.defineProperty(obj,'price',{
//   configurable:true
// })
console.log(obj)//浏览器上为了调试的友好型，可以让我们看到不可枚举属性，但是颜色不一样

// 变量作为window对象的属性
var a=1
b=2
let d=4
eval('var c=3')
delete d
console.log(Object.getOwnPropertyDescriptor(window,'a'))
console.log(Object.getOwnPropertyDescriptor(window,'b'))
console.log(Object.getOwnPropertyDescriptor(window,'c'))
// console.log(Object.getOwnPropertyDescriptor('d'))
// console.log(d)

// Boolean
const flag1=null||undefined
const flag2=null&&undefined

console.log(flag1)
console.log(flag2)

// join()方法
console.log(0xff^33)
// console.log(parseInt([0,0,1,0,0].join('')+1))//1001
const arr=[1,2,3]
console.log(arr.join(''))
