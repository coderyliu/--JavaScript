// sleep函数，程序等待一定时间后才能执行后续代码。
// 首先想到了定时器setTimeout,由于需要使用回调方式，不考虑

async function fn(){
  console.log(1)
  await sleep()
  console.log(2)
}

function sleep(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(3)
      resolve(true)
    },1000)
  })
}

fn()
