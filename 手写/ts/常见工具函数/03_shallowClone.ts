// 浅拷贝

const s = Symbol("aaa");
const obj = {
  name: "coder",
  age: 24,
  height: 1.88,
  hobbies: ["basketball", "football", "baseball"],
  // symbol的属性是可以被Object.assign拷贝的，但是不能被for...in 遍历
  [s]: "可枚举属性",
  notEnumerable: Symbol("bbb")
};

// ?不可枚举的属性不能被拷贝
Object.defineProperty(obj, "friends", {
  value: ["kobe", "curry", "james"],
  writable: true,
  enumerable: false,
  configurable: true
});

// *实现方式一：Object.assign()
const newObj = Object.assign({}, obj);
console.log(newObj);

// 获取所有属性，不包括symbol
console.log(Object.getOwnPropertyNames(obj)); // ['name', 'age', 'height', 'hobbies', 'notEnumerable']

for (const v in obj) {
  console.log(v);
}

// 获取Symbol属性
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(aaa)]

// *实现方式二：扩展运算符
const newObj2 = { ...obj };
console.log(newObj2);

// *实现方式三：借助第三方库：lodash或者underscore来实现
// *实现方式四：使用Array.prototype.concat()

// *实现方式五：递归实现
const shallowClone = (resource: any) => {
  if (Object.prototype.toString.call(resource).slice(8, -1) !== "Object") return resource;

  const target: any = {};
  for (const key in resource) {
    // 使用Object.hasOwn()来判断属性是否是对象自身的属性
    if (resource.hasOwnProperty(key)) target[key] = resource[key];
  }

  // 处理symbol属性
  const symbolKeys = Object.getOwnPropertySymbols(resource);
  for (const key of symbolKeys) {
    target[key] = resource[key];
  }

  return target;
};

const newObj3 = shallowClone(obj);
console.log(newObj3);

// 测试
obj.hobbies.push("tennis");
console.log(newObj3);

export {};
