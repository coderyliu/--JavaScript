// 防抖
const debounce = (fn, delay, resultCallback, immediate = true) => {
  let timer = null
  let invoke = false

  const _debounce = (...args) => {
    if (timer) clearTimeout(timer)

    if (immediate && !invoke){
      const result = fn.apply(this, args)
      resultCallback(result)
      invoke = true
    }
    
    timer = setTimeout(() => {
      const result = fn.apply(this, args)
      resultCallback(result)
      timer = null
      invoke = false
    }, delay)
  }

  // 取消执行
  _debounce.cancel = () => {
    clearTimeout(timer)
    timer = null
    invoke = false
  }

  return _debounce
}