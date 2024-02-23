// 深拷贝
const s = Symbol('aaa')

const obj = {
  name: 'coder',
  age: 24,
  height: 1.88,
  hobbies: ['basketball', 'football', 'baseball'],
  [s]: '可枚举属性',
  notEnumerable: Symbol('bbb'),
  foo() {},
  s1: new Set([1,2,1,2]),
  s2: new Map([['name','coder']]),
  friends: {
    name:' kobe',
    age: 40
  },
  empty: undefined,
}
obj.loop = obj

// 实现方式一：json序列化
// 不能正确处理函数、undefined、null、symbol、set、map、循环引用等
// const clone = JSON.parse(JSON.stringify(obj))
// console.log(clone)

// 实现方式二：借助第三方库来实现

// 实现方式三：递归实现
const deepClone = (originValue, map = new WeakMap()) => {
  // 如果是Set
  if (originValue instanceof Set) return new Set([...originValue])
  // 如果是Map
  if (originValue instanceof Map) return new Map([...originValue])
  // 如果是Symbol
  if (typeof originValue === 'symbol') return Symbol(originValue.description)
  // 如果是函数
  if (typeof originValue === 'function') return originValue
  // 如果是基本数据类型
  if (Object.prototype.toString.call(originValue).slice(8, -1) !== 'Object') return originValue
  // 如果是数组
  const newObj = Array.isArray(originValue) ? [] : {}

  // 处理循环引用
  if (map.has(originValue)) return map.get(originValue)
  map.set(originValue, newObj)

  // 对象或者数组
  for(const key in originValue){
    if (Object.hasOwn(originValue, key)) newObj[key] = deepClone(originValue[key], map)
  }

  for(const key of Object.getOwnPropertySymbols(originValue)){
    newObj[key] = deepClone(originValue[key], map)
  }

  return newObj
}

console.log(deepClone(obj))
