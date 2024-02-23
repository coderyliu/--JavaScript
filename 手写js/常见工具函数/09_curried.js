// 柯里化函数
// 指的是将函数的执行拆分为一个又一个函数，每个函数的职责单一
// 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

const curried = (fn) => {
  if (typeof fn !== 'function') return 

  function curring(...args) {
    // 判断当前已经接受的参数个数
    // 已经达到函数本身需要的参数个数，直接执行
    if (args.length >= fn.length) return fn.apply(this, args)

    // 没有达到个数时，需要返回一个新的函数，继续来接受新的参数
    function curring2(...arg) {
      // 接收到参数后，递归调用curring来检查参数个数
      return curring.apply(this, args.concat(arg))
    }

    return curring2
  }

  return curring
}