// 如果数组中的是基本数据类型，那么用es6中的语法可以去重
// 但是如果数据是引用类型，就得考虑其它算法了

function arrayUniQueue(arr){
  const res=[]
  const obj={}

  for(let i=0;i<arr.length;i++){
    obj[arr[i].name]=arr[i]
  }

  for(let item in obj){
    res.push(obj[item])
  }
  return res
}

const arr=[
  { name:"coder",age:18},
  { name:"coder",age:18},
  { name:"kobe",age:18},
  { name:"kobe",age:18}
]
console.log(arrayUniQueue(arr))