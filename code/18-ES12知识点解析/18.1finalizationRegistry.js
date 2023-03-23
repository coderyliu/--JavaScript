// ES12: FinalizationRegistry类
// ?提供给我们这个FinalizationRegistry类的作用是观察被注册成为FinalizationRegistry实例的对象的销毁时间
// ?注意，当我们的对象销毁之后，浏览器并不会立即回收这些对象
// ?浏览器的垃圾回收是有时间的，会过几秒钟回收这些对象
const fRegistry=new FinalizationRegistry((value)=>{
  console.log('注册在fRegistry的对象, 某一个被销毁',value)
})

let obj={
  name:'liu',
  age:21
}

let info={
  name:"kobe",
  age:41
}
fRegistry.register(obj,'obj')
fRegistry.register(info,'info')

obj=null
info=null
