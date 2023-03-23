Function.prototype.LyBind=function(thisArg,...args){
  thisArg=(thisArg!==null && thisArg!==undefined)?Object(thisArg):window
  const fn=this

  function _bind(...arg){
    thisArg.fn=fn

    const result=thisArg.fn(...args,...arg)
    delete thisArg.fn

    return result
  }

  return _bind

}