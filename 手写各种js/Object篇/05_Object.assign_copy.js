// Object.assign是对象的方法，用于对象合并，如果合并对象的值都是基本数据类型，可以看成是深拷贝
// 如果有引用数据类型，那么是一种浅拷贝

// ? assign方法是object的静态方法，需要通过defineProperty来定义
Object.defineProperty(Object,'assign',{
  value:function(target,...source){
    if(typeof target!=='object'|| target===null){
      target=Object(target)
    }
  
    for(const item of source){
      // 使用for...in和hasOwnProperty双重判断，确保只拿到本身的属性、方法（不包含继承的）
      for(let key in item){
        if(Object.prototype.hasOwnProperty.call(item,key)){
          target[key]=item[key]
        }
      }
    }
  
    return target
  }
})
