// ?主要来试用一下Object.prototype.isPrototypeOf()
// ?主要的作用是来判断某个对象是否在另一个对象的原型链上

class Teacher {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const t = new Teacher("coder", 18);
console.log(Teacher.prototype.isPrototypeOf(t)); //true
console.log(t.isPrototypeOf(Object)); //false
