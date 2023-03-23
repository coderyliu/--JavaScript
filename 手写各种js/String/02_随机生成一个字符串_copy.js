// 随机生成一个字符串
function randomString(n){
  // ?1.toString()方法
  // return Math.random().toString(36).slice(2,2+n)

  // ?2.也是随机生成,利用遍历
  const map=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
  let str=''
  for(let i=0;i<n;i++){
    let num=Math.floor(Math.random()*26)

    str+=map[num]
  }

  return str
}

console.log(randomString(6))