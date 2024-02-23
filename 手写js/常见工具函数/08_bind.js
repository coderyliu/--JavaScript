// 函数this的显示绑定方式四：bind
Function.prototype.bind = function(thisArg, ...args) {
  // 拿到调用的函数
  const fn = this

  // 处理thisArg
  thisArg = (thisArg === undefined || thisArg ===  null) ? window : Object(thisArg)

  // 改变函数this指向
  thisArg.fn = fn

  // 需要注意的是：bind并不会立即执行，而是会返回一个改变this指向的函数，并且最后调用函数的参数是加在一起的
  function bindFn(...arg) {
    const argument = [...args, ...arg]

    const result = thisArg.fn(...argument)

    return result
  }

  return bindFn
}