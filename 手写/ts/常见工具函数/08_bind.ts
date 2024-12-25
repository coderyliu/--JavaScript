// bind函数

interface Function {
  lyBind: (thisArg: any, ...args: any[]) => any;
}

Function.prototype.lyBind = function (thisArg: any, ...args) {
  const fn = this;

  // 判断thisArg是否是undefined或null
  if (typeof thisArg === undefined || thisArg === null) {
    thisArg = window;
  }

  // 将thisArg转换为对象
  thisArg = new Object(thisArg);

  function bindFn(...args2: any[]) {
    // 将fn绑定到thisArg上
    thisArg.fn = fn;
    // 执行fn
    const result = thisArg.fn(...args, ...args2);
    // 删除fn
    delete thisArg.fn;
    return result;
  }

  return bindFn;
};
