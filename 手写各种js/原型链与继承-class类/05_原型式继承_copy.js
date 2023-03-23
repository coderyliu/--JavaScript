function Person(name,age){
  this.name=name
  this.age=age
}

Person.prototype.eating=function(){
  console.log('eating dinner')
}

function Teacher(name,age){
  Teacher.apply(this,[name,age])
}

// const p=new Person('coder',21)
Teacher.prototype=Object.create(Person.prototype)

Teacher.prototype.sleeping=function(){
  console.log('sleeping ten hours')
}