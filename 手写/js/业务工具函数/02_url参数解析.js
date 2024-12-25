// url参数解析
const url = 'https://juejin.cn/search?query=%E8%A7%A3%E6%9E%90url%E5%8F%82%E6%95%B0&name=coder&age=21'

// 方式一：正则表达式
// 缺陷：不能匹配转码的参数
const getUrlParamsOne = (url) => {
  const pattern = /(\w+)=(\w+)/ig
  const params = {}
  url.replace(pattern, ($, $1, $2) => {
    params[$1] = $2
  })

  return params
}

getUrlParamsOne(url)

// 方式二：URL对象
const getUrlParamsTwo = (url) => {
  const newUrl = new URL(url)
  return newUrl.searchParams
}

console.log(getUrlParamsTwo(url))

// 方式三：URLSearchParams
const getUrlParamsThree = (url) => {
  const search = url.split('?')[1]
  const searchParams = new URLSearchParams(search)

  return searchParams
}

console.log(getUrlParamsThree(url))

// 方式四：split拆分
const getUrlParamsFour = (url) => {
  const search = url.split('?')[1]
  const params = search.split('&')

  const searchParams = {}
  for(const s of params){
    if (/=/.test(s)){
      const [key, value] = s.split('=')
      // 如果key已经存在，添加一个值
      if (searchParams.hasOwnProperty(key)){
        searchParams[key] = [].concat(searchParams[key], decodeURIComponent(value))
      }else{
        searchParams[key] = decodeURIComponent(value)
      }
    }else{
      searchParams[key] = ''
    }
  } 

  return searchParams
}

console.log(getUrlParamsFour(url))