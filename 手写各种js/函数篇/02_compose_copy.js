// 组合函数

function compose(...fns) {
  for (let i = 0; i < fns.length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new Error('fns must be the function')
    }
  }

  function _compose(...args) {
    let index = 0
    let result = fns[0].apply(this, args)
    while (index < fns.length) {
      result = fns[index].apply(this, [result])
    }

    return result
  }

  return _compose
}