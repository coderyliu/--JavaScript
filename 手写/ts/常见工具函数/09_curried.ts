// 柯里化函数
// 指的是将函数的执行拆分为一个又一个函数，每个函数的职责单一
// 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

const curried = (fn: Function): Function => {
  if (typeof fn !== "function") {
    throw new Error("fn is not a function");
  }

  function curry(...args: any[]) {
    // 判断当前已经接受的参数个数
    // 已经达到函数本身需要的参数个数，直接执行
    if (args.length >= fn.length) return fn.apply(null, args);

    // 没有达到个数时，需要返回一个新的函数，继续来接受新的参数
    function curry2(...args2: any[]) {
      return curry.apply(null, args.concat(args2));
    }

    return curry2;
  }

  return curry;
};

function sum(a: number, b: number, c: number) {
  return a + b + c;
}

let curriedSum = curried(sum);

console.log(curriedSum(1, 2, 3)); // 6，仍然可以被正常调用
console.log(curriedSum(1)(2, 3)); // 6，对第一个参数的柯里化
console.log(curriedSum(1)(2)(3)); // 6，全柯里化

export {};
