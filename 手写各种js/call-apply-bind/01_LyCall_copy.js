Function.prototype.lyCall=function(thisArg,...args){
  thisArg=(thisArg === null || thisArg === undefined)?window:Object(thisArg)

  const fn=this
  thisArg.fn=fn

  const res=thisArg.fn(args)
  delete thisArg.fn

  return res
}