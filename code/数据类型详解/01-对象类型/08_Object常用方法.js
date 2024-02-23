// 1. Object.create() 创建一个对象，并指定这个对象的原型
// 第一个参数，创建对象的原型，第二个参数，创建对象的属性
// 重要的是，第二个参数可以对对象的属性进行精细化控制：数据属性描述符或者访问属性描述符
const person = Object.create(Object.prototype, {
  name: {
    value: "张三",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 18,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});
console.log(person);
console.log(person.__proto__);

// 2. Object.assign() 用于浅拷贝一个对象 => 返回合并之后的对象
// 参数：目标对象  要合并的对象1  要合并的对象2  要合并的对象3  ...
// 注意：a.具有相同属性会被覆盖 b.原型链上的属性和不可枚举的属性不会被拷贝 c.Symbol属性会被拷贝 d.异常会中断后续的拷贝
// *自实现Object.assign方法
Object.defineProperty(Object, "assign", {
  value: function (target, ...source) {
    if (target === null || target === undefined) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    const to = Object(target);
    for (let index = 0; index < source.length; index++) {
      const nextSource = source[index];
      if (nextSource !== null && nextSource !== undefined) {
        for (const key of Object.getOwnPropertyNames(nextSource)) {
          to[key] = nextSource[key];
        }
      }
    }
  },
});

// 3. Object.getOwnPropertyNames() 返回一个对象自身属性名的数组，包括不可枚举属性，不包括原型链上的属性和Symbol属性

// 4. Object.getOwnPropertySymbols() 返回一个对象自身Symbol属性名的数组，包括不可枚举的Symbol属性，不包括原型链上的Symbol属性

// 5. Object.getPrototypeOf() 返回对象的原型对象，即对象的__proto__属性

// 6. Object.hasOwn() 判断对象是否具有指定的属性而不在对象原型上，返回true或者false

// 7. Object.is() 判断两个值是否相等，相等返回true，不相等返回false

// 8. Object.keys() 返回一个对象自身可枚举属性名的数组，不包括原型链上的属性和Symbol属性

// 9. Object.values() 返回一个对象自身可枚举属性值的数组，不包括原型链上的属性和Symbol属性

// 10. Object.setPrototypeOf() 设置一个对象的原型对象，返回设置后的对象
