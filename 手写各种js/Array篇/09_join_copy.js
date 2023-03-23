Array.prototype.join=function(kobe=','){
  const arr=this
  let res=''

  for(let i=0;i<arr.length;i++){
    res+=`${arr[i]}${kobe}`
  }

  return res.slice(0,-1)
}

const str=[1,2,3].join('')
console.log(str)
