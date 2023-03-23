// function* generatorExec(){
//   yield new Promise((resolve,reject)=>{resolve(111)})
// }
// const generator=generatorExec()
// console.log(typeof generator)
// console.log(Object.getOwnPropertyDescriptors(generator))
// console.log(generator.next().value)

// console.log('----start----')

// async function getData(){
//   console.log('111111')
//   const result=await new Promise((resolve,reject)=>{resolve({name:'liu',age:21})})
//   console.log(result)
// }
// getData()

// console.log('-----end------')

function* foo() {
  console.log("函数开始执行~")

  const value1 = 100
  console.log("第一段代码:", value1)
  yield

  const value2 = 200
  console.log("第二段代码:", value2)
  yield

  const value3 = 300
  console.log("第三段代码:", value3)
  yield

  console.log("函数执行结束~")
}

// 调用生成器函数时, 会给我们返回一个生成器对象
const generator = foo()

console.log(generator)

// 开始执行第一段代码
generator.next()

// 开始执行第二端代码
console.log("-------------")
generator.next()
generator.next()
console.log("----------")
generator.next()

