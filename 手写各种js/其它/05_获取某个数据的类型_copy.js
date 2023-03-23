function getDataType(data){
  let result=Object.prototype.toString.call(data)
  //'[object String]' 

  result=result.slice(8,-1)
  console.log(result)
}

getDataType('123')