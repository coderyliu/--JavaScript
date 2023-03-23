// instanceof这个运算符主要是用来判断某个对象是不是某个类的实例
// 它的主要原理是通过判断这个类的原型在不在这个对象的原型上

function _instanceOf(child, parent) {
  if (child === null || parent === null || typeof child !== 'object' || typeof parent !== 'function') {
    throw new Error('传入的参数类型错误')
  }

  let _child=child
  let _parent=parent

  while(_child){
    if(_child.__proto__ !== _parent.prototype){
      _child=_child.__proto__
    }else{
      return true
    }
  }

  return false
}

const arr=[1,2,3]
console.log(_instanceOf(arr,Array))