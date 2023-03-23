// 1.set+扩展运算符
function arrayUnique(arr) {
  return [...new Set(arr)]
}

// 2.includes||indexOf
function arrayUnique(arr){
  let res=[]
  
  for(let i=0;i<arr.length;i++){
    if(!res.includes(arr[i])){
      res.push(arr[i])
    }
  }

  return res
}
// console.log(arrayUnique([1,1,2,3,5,5,6]))

// 3.map
function arrayUnique(arr){
  const map=new Map()

  for(let i=0;i<arr.length;i++){
    if(!map.has(arr[i])){
      map.set(arr[i],true)
    }
  }

  return Array.from(map.keys())
}

// 4.循环
function arrayUnique(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]===arr[j]){
        arr.splice(j,1)
        j--
      }
    }
  }

  return arr
}
console.log(arrayUnique([1,1,2,3,5,5,6]))