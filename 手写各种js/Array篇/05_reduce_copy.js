Array.prototype.reduce=function(callback,pre){
  let start=0
  let res
  if(pre===undefined){
    start=1
    pre=this[0]
  }

  for(start;start<this.length;start++){
    pre=callback(pre,this[i])
  }

  res=pre
  return res
}

const total=[1,2,3].reduce((pre,cur)=>{
  return pre+cur
},0)
