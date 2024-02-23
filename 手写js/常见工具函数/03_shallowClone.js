// 浅拷贝
const s = Symbol('aaa')

const obj = {
  name: 'coder',
  age: 24,
  height: 1.88,
  hobbies: ['basketball', 'football', 'baseball'],
  // symbol的属性是可以被Object.assign拷贝的，但是不能被for...in 遍历
  [s]: '可枚举属性',
  notEnumerable: Symbol('bbb')
}

// 不可枚举的属性不能被拷贝
Object.defineProperty(obj, 'friends', {
  value: ['kobe', 'curry', 'james'],
  writable: true,
  enumerable: false,
  configurable: true
})

// 实现方式一：借助Object.assign()
const coderObj = Object.assign({}, obj)
for(const v in obj){
  console.log(v)
}
// 获取Symbol属性
console.log(Object.getOwnPropertySymbols(obj))
// 获取所有属性，不包括symbol
console.log(Object.getOwnPropertyNames(obj))

// 实现方式二：使用扩展运算符
const targetObj = { ...obj }
console.log(targetObj)

// 实现方式三：借助第三方库：lodash或者underscore来实现

// 实现方式四：使用Array.prototype.concat()
const arr = []
const refer = { name: '测试' }
// concat 不会改变原数组
const targetArr = arr.concat(1, 2, 3, refer, [4 ,5, 6])
refer.name = 'hi'
console.log(targetArr)

// 实现方式五：递归实现
function shallowClone(obj) {
  if (Object.prototype.toString.call(obj).slice(8, -1) !== 'Object') return

  const target = {}
  for(const key in obj) {
    if (Object.hasOwn(obj, key)) target[key] = obj[key]
  }

  return target
}