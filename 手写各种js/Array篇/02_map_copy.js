// map是数组的高阶函数

Array.prototype.map=function(callback){
  const arr=this
  const res=[]

  for(let i=0;i<arr.length;i++){
    res.push(callback(arr[i],i,arr))
  }

  return res
}

const arr=[1,2,3].map(i=>i*2)
console.log(arr)
