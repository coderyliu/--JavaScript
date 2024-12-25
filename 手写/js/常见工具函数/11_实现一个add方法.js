// 题目描述:实现一个 add 方法 使计算结果能够满足如下预期： add(1)(2)(3)()=6 add(1,2,3)(4)()=10
// 其实就是考函数柯里化

const add = (...args) => {
  let allArgs = [...args];

  function fn(...newArgs) {
    allArgs = [...allArgs, ...newArgs];
    return fn;
  }

  fn.toString = () => {
    if (!allArgs.length) return;
    return allArgs.reduce((prev, cur) => prev + cur, 0);
  };

  return fn;
};

console.log(add(1)(2)(3).toString());
add(1, 2, 3);
