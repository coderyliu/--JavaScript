let URL='https://juejin.cn/search?query=%E8%A7%A3%E6%9E%90url%E5%8F%82%E6%95%B0&name=coder&age=21'
let URL2='https://juejin.cn/search?name=coder&age=21&height=1.88'

// ?1.split拆分
function parseURL(str){
  let queryStr=str.split('?')[1]
  let queryArr=queryStr.split('&')

  let res={}
  queryArr.forEach(param=>{
    if(/=/.test(param)){
      let paramArr=param.split('=')

      let value=decodeURIComponent(paramArr[1])

      if(res.hasOwnProperty(paramArr[0])){
        res[paramArr[0]]=[].concat(res[paramArr[0]],value)
      }else{
        res[paramArr[0]]=value
      }
    }else{
      res[param]=true
    }
  })

  console.log(res)
}

// ?2.类
function parseURL(str){
  const queryStr=str.split('?')[1]
  const url=new URLSearchParams(queryStr)
  // const res=Object.formEntries(url)

  console.log(url)
}

parseURL(URL)