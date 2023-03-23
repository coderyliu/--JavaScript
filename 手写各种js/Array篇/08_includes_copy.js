Array.prototype.includes=function(v){
  for(let i=0;i<this.length;i++){
    if(this[i]===v&& !Number.isNaN(v)){
      return true
    }else if(Number.isNaN(v)&&Number.isNaN(this[i])){
      return true
    }
  }
  return false
}

const result=[1,2,3].includes('1')