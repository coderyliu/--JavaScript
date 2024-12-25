// 实现深拷贝
const s = Symbol("aaa");

const obj = {
  name: "coder",
  age: 24,
  height: 1.88,
  hobbies: ["basketball", "football", "baseball"],
  [s]: "可枚举属性",
  notEnumerable: Symbol("bbb"),
  foo() {},
  s1: new Set([1, 2, 1, 2]),
  s2: new Map([["name", "coder"]]),
  friends: {
    name: " kobe",
    age: 40
  },
  empty: undefined
};

// *实现方式一：json序列化
// 不能正确处理函数、undefined、null、symbol、set、map、循环引用等
// const clone = JSON.parse(JSON.stringify(obj))
// console.log(clone)

// *实现方式二：借助第三方库来实现

// ?判断是否是对象
const isObject = (resource: any) =>
  Object.prototype.toString.call(resource).slice(8, -1) === "Object";

// *方式三：递归实现
const deepClone = (resource: any, map = new WeakMap()) => {
  if (!isObject(resource)) return resource;

  // 处理set类型
  if (resource instanceof Set) {
    return new Set([...resource]);
  }

  // 处理map类型
  if (resource instanceof Map) {
    return new Map([...resource]);
  }

  // 处理函数类型
  if (typeof resource === "function") {
    return resource;
  }

  // 处理symbol类型
  if (typeof resource === "symbol") {
    return Symbol(resource.description);
  }

  // 处理Date类型
  if (resource instanceof Date) {
    return new Date(resource);
  }

  const target: any = Array.isArray(resource) ? [] : {};

  // 处理循环引用
  if (map.has(resource)) {
    return map.get(resource);
  }
  map.set(resource, target);

  // 处理普通对象
  for (const key in resource) {
    if (resource.hasOwnProperty(key)) {
      target[key] = deepClone(resource[key]);
    }
  }

  // 处理symbol属性
  const symbolKeys = Object.getOwnPropertySymbols(resource);
  for (const key of symbolKeys) {
    target[key] = deepClone(resource[key]);
  }

  return target;
};

const newObj = deepClone(obj);
console.log(newObj);

obj.friends.name = "curry";
console.log(newObj);

export {};
