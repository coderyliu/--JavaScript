var arr = [1, 2, 3];
console.log(arr instanceof Array); //true
console.log(new Function() instanceof Object); //true
console.log(new Function() instanceof Function); //true

console.log(arr instanceof Object); //true
console.log(new Date() instanceof Object); //true
console.log(new Date() instanceof Function); //false

const F = function () {};
Object.prototype.a = function () {};
Function.prototype.b = function () {};

const f = new F();
console.log(f instanceof Object); //true

function foo(name, age) {
  this.name = name;
  this.age = age;
}

const p = new foo("liu", 18);
console.log(p);

// 一道非常重要的面试题
function Foo() {
  getName = function () {
    alert(1);
  };
  return this;
}
Foo.getName = function () {
  alert(2);
};
Foo.prototype.getName = function () {
  alert(3);
};
var getName = function () {
  alert(4);
};
function getName() {
  alert(5);
}

Foo.getName(); //2
getName(); //4
Foo().getName(); //1
getName(); //1
new Foo.getName(); //2
new Foo().getName(); //3
new new Foo().getName(); //3
