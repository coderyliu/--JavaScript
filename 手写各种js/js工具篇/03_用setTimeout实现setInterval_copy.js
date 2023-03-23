function lySetinterval(fn,delay){
  let timer=null

  function setInterval(){
    fn()
    timer=setTimeout(setInterval,delay)
  }
  
  setInterval()

  return {
    cancel:function(){
      clearTimeout(timer)
    }
  }
}

lySetinterval(()=>{
  console.log(1)
},1000)
