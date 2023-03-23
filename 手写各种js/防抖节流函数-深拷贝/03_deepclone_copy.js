// 深拷贝的处理方式
// 1.通过第三方库lodash或者understore

// 2.JSON.stringify和JSON.parse 不能处理函数，正则表达式，symbol类型

// 3.递归循环
function isObject(resource){
  return (resource!==null&& typeof resource ==='object' )|| typeof resource==='function'
}

function deepClone(resource,map=new WeakMap()){
  if(resource instanceof Set){
    return new Set([...resource])
  }

  if(resource instanceof Map){
    return new Map([...resource])
  }

  if(!isObject(resource)){
    return resource
  }
  
  if(typeof resource ==='function'){
    return resource
  }

  const newResource=Array.isArray(resource)?[]:{}
  
  if(!map.has(resource)){
    map.set(resource,newResource)
  }else{
    return map.get(resource)
  }

  for(let key in resource){
    newResource[key]=deepClone(resource[key],map)
  }

  const symbolList=Object.getOwnPropertySymbols(resource)
  for(let key of symbolList){
    newResource[key]=deepClone(resource[key],map)
  }

  return newResource
}

const obj={
  name:'coder',
  age:21,
  friends:{
    name:"kobe",
    age:43
  },
  eating(){
    console.log('eating')
  },
  region:['dalian','chengde','xian'],
  set:new Set([1,2,3]),
  map:new Map(),
  a:Symbol(1),
  [Symbol('name')]:'curry'
}

obj.info=obj

console.log(deepClone(obj))