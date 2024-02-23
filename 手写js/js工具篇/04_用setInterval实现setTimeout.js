// 用setTimeout实现setInterval

function lySetTimeout(fn,delay){
  let timer=null

  function interval(){
    if(timer) return clearInterval(timer)
    fn()
    timer=setInterval(interval,delay)
  }

  interval()

}

lySetTimeout(()=>{
  console.log(1)
},1000)

