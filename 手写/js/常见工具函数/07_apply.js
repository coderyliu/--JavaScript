// 函数this的显示绑定方式二：apply
Function.prototype.apply = function (thisArg, ...args) {
  // 首先拿到调用call的函数
  const fn = this;

  // 对thisArg处理
  thisArg =
    thisArg === undefined || thisArg === null ? window : Object(thisArg);

  // 改变函数的this指向
  thisArg.fn = fn;

  // 执行函数
  const result = thisArg.fn(...args);

  delete thisArg.fn;

  return result;
};
