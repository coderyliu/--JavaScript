// ?在项目当中是可以直接使用的，当我们请求某个资源的时候，可能后端响应时间过长，这时候请求可能会报错，比如说超时
// ?这时候我们可以捕获错误，再次发起请求，给用户带来良好的体验

// todo retry方法，可以传递请求错误，再次发起请求的次数

function retry(fn, times, delay) {
  return new Promise((resolve, reject) => {
    async function inner(){
      try {
        const result=await fn()
        resolve(result)
      } catch (error) {
        if(times-- <=0){
          reject(error)
        }else{
          console.log('开始重试，剩余',times)
          // 延迟执行
          setTimeout(()=>{
            inner()
          },delay)
        }
      }
    }

    inner()
  })
}

// 请求函数
let rate = 0.5

function request() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = Math.random()
      if (res > rate) {
        resolve(res)
      } else {
        reject(res)
      }
    })
  })
}

retry(request, 3, 2000).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})