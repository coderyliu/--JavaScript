Array.prototype.find=function(callback){
  const arr=this
  let result

  for(let i=0;i<arr.length;i++){
    if(callback(arr[i],i,arr)){
      result=arr[i]
    }
  }

  return result
}

Array.prototype.findIndex=function(callback){
  const arr=this
  let result=-1

  for(let i=0;i<arr.length;i++){
    if(callback(arr[i],i,arr)){
      result=i
    }
  }

  return result
}

const result=[1,2,3].find((v)=>v===2)
console.log(result)
