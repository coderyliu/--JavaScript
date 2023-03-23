// 要求
// 随机生成一个数组[2,3,10,5,7,9,10,12,15,20,33]
// 输出：[[2,3,5,7,9],[10,12,15],[20],[33]]

function getRandomNumber(){
  return Math.floor(Math.random()*(100))
}

function arrayPrint(){
  // 1.随机生成一个数组
  const arr=Array.from({length:10},(v)=>getRandomNumber())

  // 2.排序
  arr.sort((a,b)=>a-b)

  // 3.遍历处理
  const map={}
  for(let i=0;i<arr.length;i++){
    const item=Math.floor(arr[i]/10)
    if(!map[item]){
      map[item]=[]
    }
    map[item].push(arr[i])
  }
  console.log(arr)
  console.log(Object.values(map))
}

arrayPrint()
