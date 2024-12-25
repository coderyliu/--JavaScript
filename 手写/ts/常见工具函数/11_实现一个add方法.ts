// 实现一个add方法 使计算结果能够满足如下预期： add(1)(2)(3)()=6 add(1,2,3)(4)()=10
// 其实就是考函数柯里化

const add = (...args: any[]): Function => {
  let allArgs = [...args];

  function fn(...newArgs: any[]) {
    allArgs = [...allArgs, ...newArgs];
    return fn;
  }

  fn.toString = () => {
    if (!allArgs.length) return;
    return allArgs.reduce((prev, cur) => prev + cur, 0);
  };

  return fn;
};

console.log(add(1)(2)(3).toString()); // 6
console.log(add(1, 2, 3)(4).toString()); // 10

export {};
