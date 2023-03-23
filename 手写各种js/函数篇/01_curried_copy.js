// 函数柯里化:将每个函数的职责单一，并且每个函数的复用性很强
// 每个函数只处理部分函数，剩余的参数交给其他函数处理

function curried(fn) {
  function _curried(...args) {
    if (fn.length <= args.length) {
      return fn.apply(this, args)
    } else {
      function _curried2(...arg) {
        return _curried.apply(this, args.concat(arg))
      }

      return _curried2
    }
  }

  return _curried
}