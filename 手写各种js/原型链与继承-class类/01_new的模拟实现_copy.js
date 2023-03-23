function _new(fn,...args){
  // new的几部操作
  // 1.创建一个对象
  // 2.将这个构造函数的原型赋值给对象的原型
  // 3.将这个对象赋值给this
  // 4.执行构造函数体
  // 5.返回这个new的对象

  const obj=Object.create(fn.prototype)

  const result=fn.apply(obj,args)

  if(typeof result !=='object' || result ===null ||typeof result ==='function'){
    return result
  }else{
    return obj
  }
}

function Person(name,age){
  this.name=name
  this.age=age
}

const p=_new(Person,'coder',21)