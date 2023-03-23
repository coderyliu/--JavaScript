Array.prototype.some=function(callback){
  for(let i=0;i<this.length;i++){
    if(callback(arr[i],i,arr)){
      return true
    }
  }

  return false
}

const res=[1,2,3].some((v)=>v===2)
console.log(res)
