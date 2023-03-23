var a = {
	b: 123,
	c: '456',
	e: '789',
}
var str=`a{a.b}aa{a.c}aa {a.d}aaaa`;
// => 'a123aa456aa {a.d}aaaa'

function stringParse(str){
  let res=''
  let start
  let flag=false

  for(let i=0;i<str.length;i++){
    if(str[i]==='{'){
      flag=true
      start=i
    }else{
      if(flag){
        if(str[i]==='}'){
          res+=getObjProperty(a,str.slice(start+1,i))
          flag=false
        }
      }else{
        res+=str[i]
      }
    }
  }
  console.log(res)
}

function getObjProperty(obj,str){
  const key=str.split('.')[1]
  if(obj[key]){
    return obj[key]
  }else{
    return `{${str}}`
  }
}

stringParse(str)
