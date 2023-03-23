Array.prototype.filter=function(callback){
  const arr=this
  const res=[]

  for(let i=0;i<arr.length;i++){
    if(callback(arr[i],i,arr)){
      res.push(callback(arr[i],i,arr))
    }
  }

  return res
}