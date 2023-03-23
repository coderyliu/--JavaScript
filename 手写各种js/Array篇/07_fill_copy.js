Array.prototype.fill=function(value,start=0,end){
  end=end || this.length
  for(start;start<end;start++){
    this[start]=value
  }

  return start
}