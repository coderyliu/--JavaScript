// 节流

function throttle(fn, interval, immediate = true,trailing=true) {
  let lastTime = 0
  let timer=null

  function _throttle(...args) {
    let nowTime = new Date().getTime()

    if (!immediate&&!lastTime) {
      lastTime = nowTime
    }

    let remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      if(timer){
        clearTimeout(timer)
        timer=null
      }
      
      const result = fn.apply(this, args)

      lastTime = nowTime
      return result
    }

    if(trailing&&!timer){
      timer=setTimeout(()=>{
        const result = fn.apply(this, args)

        timer=null
        return result
      },remainTime)
    }

  }

  return _throttle
}