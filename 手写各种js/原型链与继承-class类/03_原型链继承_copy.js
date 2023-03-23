// 但是目前有一个很大的弊端：某些属性其实是保存在p对象上的；

// 第一，我们通过直接打印对象是看不到这个属性的；
// 第二，这个属性会被多个对象共享，如果这个对象是一个引用类型，那么就会造成问题；
// 第三，不能给Teacher传递参数，因为这个对象是一次性创建的（没办法定制化）；
function Person(name,age){
  this.name=name
  this.age=age
}

Person.prototype.eating=function(){
  console.log('eating dinner')
}

function Teacher(name,age){
  this.name=name
  this.age=age
}

const p=new Person('coder',21)
Teacher.prototype=p

Teacher.prototype.sleeping=function(){
  console.log('sleeping ten hours')
}
