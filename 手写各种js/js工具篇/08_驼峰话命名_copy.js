// 将骆驼命名规则的字符串转换成使用短横线命名法的字符串, 并且全小写 .
// 例如: 'getElementById' => 'get-element-by-id'

// ?1.直接遍历
function camelToKobe(str){
  let res=''
  for(let i=0;i<str.length;i++){
    if(str[i].toUpperCase()===str[i]){
      res+=`-${str[i].toLowerCase()}`
    }else{
      res+=str[i]
    }
  }

  if(res[0]==='-'){
    res=res.slice(1)
  }

  console.log(res)
}

// ?2.正则表达式匹配
function camelToKobe(str){
  return str.replace(/[A-Z]/g,(i)=>{
    return '-'+i.toLowerCase()
  })
}
console.log(camelToKobe('getElementById'))

// todo 短横线命名转换为驼峰
function kobeToCamel(str){
  // ?直接遍历
  let res=''
  for(let i=0;i<str.length;i++){
    if(str[i]==='-'){
      res+=str[i+1].toUpperCase()
      i++
    }else{
      res+=str[i]
    }
  }

  console.log(res)
}

kobeToCamel('get-element-by-id')

