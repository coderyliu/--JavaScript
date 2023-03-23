// forEach是数组常用的遍历方法之一，需要注意的是：forEach是并行的，forEach不能通过break跳出循环，可以通过抛出异常跳出循环
// forEach给每一项都定义一个函数，每个函数互不影响，所有函数执行完之后，统一返回结果

Array.prototype.forEach=function(callback){
  const arr=this

  for(let i=0;i<arr.length;i++){
    callback(arr[i],i,arr)
  }
}

const arr=[1,2,3,4,5]
arr.forEach((value,index,arr)=>{
  console.log(this)
},{name:'coder'})

