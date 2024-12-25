// apply函数

interface Function {
  lyApply: (thisArg: any, ...args: any[]) => any;
}

Function.prototype.lyApply = function (thisArg: any, ...args) {
  // 获取调用apply的函数
  const fn = this;

  // 判断thisArg是否是undefined或null
  if (typeof thisArg === undefined || thisArg === null) {
    thisArg = window;
  }

  // 将thisArg转换为对象
  thisArg = new Object(thisArg);

  // 将fn绑定到thisArg上
  thisArg.fn = fn;

  // 执行fn
  const result = thisArg.fn(...args);

  // 删除fn
  delete thisArg.fn;
  return result;
};

export {};
