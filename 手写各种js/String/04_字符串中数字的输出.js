// 要求：如下字符串
// 如果字符串中的数字是连续的，输出开始~结尾，如果不连续直接输出
// '1,2,3,5,7,8,10'-->输出 '1~3,5,7~8,10'

function successiveString(str){

  let arr=str.split(',').map(i=>Number(i))
  let res=[]
  let prev=arr[0]
  for(let i=1;i<arr.length;i++){
    if(arr[i-1]+1===arr[i]){
      continue
    }else{
      if(prev===arr[i-1]){
        res.push(arr[i-1]+'')
      }else{
        res.push(`${prev}~${arr[i-1]}`)
      }
      prev=arr[i]
    }
  }
  if(prev===arr[arr.length-1]){
    res.push(prev+'')
  }else{
    res.push(`${prev}~${arr[arr.length-1]}`)
  }
  console.log(res)
}

successiveString('1,2,3,5,7,8,10')
successiveString('1,2,3,5,7,8,10,11')
successiveString('1,2,3,4,5,6,8,9,10,11,23,56')
