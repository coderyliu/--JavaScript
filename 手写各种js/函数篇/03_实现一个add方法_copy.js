// 题目描述:实现一个 add 方法 使计算结果能够满足如下预期： add(1)(2)(3)()=6 add(1,2,3)(4)()=10
// 其实就是考函数柯里化

function add(...args) {
  let arr = [...args]

  function interval(...arg) {
    arr = [...arr, ...arg]
    if (!arg.length) {
      return arr.reduce((pre, cur) => {
        return pre + cur
      }, 0)
    }

    return interval
  }

  return interval
}

console.log(add(1)(2)(3)())