function Person(name,age){
  this.name=name
  this.age=age
}

Person.prototype.eating=function(){
  console.log('eating dinner')
}

function Teacher(name,age){
  Person.apply(this,[name,age])
}

const p=new Person('coder',21)
Teacher.prototype=p

Teacher.prototype.sleeping=function(){
  console.log('sleeping ten hours')
}
