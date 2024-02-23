let a = 1

function b(a) {
  a = 2
  console.log(a)
}
b(a) //2
console.log(a) //1


function a(b = c, c = 1) {
  console.log(b, c)
}
a() //error


let a = b = 10;
(function () {
  let a = b = 20
})()
console.log(a) //10
console.log(b) //20

// ? 错了
var a = {
  n: 1
}
var b = a
a.x = a = {
  n: 2
}
// todo 解析的时候{n:1,x:undefined}
// todo 赋值的时候 a={n:2} b.x=a
console.log(a.x) // todo undefined
console.log(b.x) // todo {n:2}


var arr = [0, 1, 2]
arr[10] = 10
console.log(arr.filter(function (x) {
  return x === undefined
})) //[]


var name = 'World';
(function () {
  if (typeof name === 'undefined') {
    var name = "Jack"
    console.info('Goodbye ' + name)
  } else {
    console.info('Hello ' + name)
  }
})() // Goodbye Jack


console.log(1 + NaN) //NaN
console.log("1" + 3) //'13'
console.log(1 + undefined) // NaN
console.log(1 + null) //1
console.log(1 + {}) //'1[object Object]'
console.log(1 + []) //'1'
console.log([] + {}) //'[object Object]'


var a = {},
  b = {
    key: 'b'
  },
  c = {
    key: 'c'
  }
a[b] = 123 //b,c是对象，转成字符串都是[object Object]
a[c] = 456
console.log(a[b]) //456

// ?错了
var out = 25
var inner = {
  out: 20,
  func: function () {
    var out = 30
    return this.out
  }
};
console.log((inner.func, inner.func)()) //逗号操作符返回后边表达式的值即:直接调用window下的this
console.log(inner.func()) //20
console.log((inner.func)()) //todo 20 输出20等价于inner.func()
console.log((inner.func = inner.func)()) //25


let {
  a,
  b,
  c
} = {
  c: 3,
  b: 2,
  a: 1
}
console.log(a, b, c) //1,2,3


console.log(Object.assign([1, 2, 3], [4, 5])) //[4,5,3]  
// assign方法可以用于处理数组，不过会把数组视为对象，比如这里会把目标数组视为是属性为0、1、2的对象，所以源数组的0、1属性的值覆盖了目标对象的值。


var x = 1
switch (x++) {
  case 0:
    ++x
  case 1:
    ++x
  case 2:
    ++x
}
console.log(x) //4


console.log(typeof undefined == typeof NULL) //true
console.log(typeof
  function () {} == typeof class {}) //true


var count = 0
console.log(typeof count === "number") //true
console.log(!!typeof count === "number") //false


"use strict"
a = 1
var a = 2
console.log(window.a) //2
console.log(a) //2


var i = 1

function b() {
  console.log(i)
}

function a() {
  var i = 2
  b()
}
a() //1


var obj = {
  name: 'abc',
  fn: () => {
    console.log(this.name)
  }
};
obj.name = 'bcd'
obj.fn() //'Window'


const obj = {
  a: {
    a: 1
  }
};
const obj1 = {
  a: {
    b: 1
  }
};
console.log(Object.assign(obj, obj1)) //{a:{b:1}}

// ?错了
console.log(a) //undefined
var a = 1
var getNum = function () {
  a = 2
}

function getNum() {
  a = 3
}
console.log(a) //1
getNum()
console.log(a) //todo 这里输出2 也是因为函数已经提升了，之后赋值会被覆盖


var scope = 'global scope'

function a() {
  function b() {
    console.log(scope)
  }
  return b
  var scope = 'local scope'
}
a()() //undefined


function fn() {
  console.log(this)
}
var arr = [fn]
arr[0]() //window


// ?错误 函数提升高于变量提升，并且函数与变量同名不会被变量覆盖，变量没有实际意义，但是之后被赋值，函数就会被覆盖，因为函数已经提升了，不会再有赋值操作
var a = 1
function a() {}
console.log(a) //todo 1

var b
function b() {}
console.log(b) //()=>{}

function b() {}
var b
console.log(b) //()=>{}


function Foo() {
  getName = function () { console.log(1) }
  return this
}
Foo.getName = function () { console.log(2) }
Foo.prototype.getName = function () { console.log(3) }
var getName = function () { console.log(4) }
function getName() { console.log(5) }

//请写出以下输出结果：
Foo.getName()//2
getName()//4
Foo().getName()//1
getName()//1
new Foo.getName()//2
new Foo().getName()//3
new new Foo().getName()//3


const person = {
  address: {
    country: "china",
    city: "hangzhou"
  },
  say: function () {
    console.log(`it's ${this.name}, from ${this.address.country}`)
  },
  setCountry: function (country) {
    this.address.country = country
  }
}
const p1 = Object.create(person)
const p2 = Object.create(person)
p1.name = "Matthew"
p1.setCountry("American")
p2.name = "Bob"
p2.setCountry("England")

p1.say()//it's Matthew,from England
p2.say()//it's Bob,from England


setTimeout(function () {
  console.log(1)
}, 0)
new Promise(function (resolve) {
  console.log(2)
  for (var i = 0; i < 10000; i++) {
    i == 9999 && resolve()
  }
  console.log(3)
}).then(function () {
  console.log(4)
})
console.log(5) //2 3 5 4 1


console.log('1');
setTimeout(function () {
  console.log('2');
  process.nextTick(function () {
    console.log('3');
  });
  new Promise(function (resolve) {
    console.log('4');
    resolve();
  }).then(function () {
    console.log('5');
  });
});
process.nextTick(function () {
  console.log('6');
});
new Promise(function (resolve) {
  console.log('7');
  resolve();
}).then(function () {
  console.log('8');
});
setTimeout(function () {
  console.log('9');
  process.nextTick(function () {
    console.log('10');
  })
  new Promise(function (resolve) {
    console.log('11');
    resolve();
  }).then(function () {
    console.log('12')
  });
})
// 1 7 6  8 2 4 3 5 9 11 10 12