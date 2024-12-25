// 组合函数

const composed = (...fns: Function[]): Function => {
  // 判断fns是否是函数
  for (let i = 0; i < fns.length; i++) {
    if (typeof fns[i] !== "function") {
      throw new Error("fn must be a function");
    }
  }

  function compose(...args: any[]) {
    // 取出第一个函数
    let index = 0;
    let result = fns[index].apply(null, args);
    while (++index < fns.length) {
      result = fns[index].apply(null, [result]);
    }

    return result;
  }

  return compose;
};

function fn1(x: number) {
  return x + 1;
}
function fn2(x: number) {
  return x + 2;
}
function fn3(x: number) {
  return x + 3;
}
function fn4(x: number) {
  return x + 4;
}

// 实现
const res = composed(fn1, fn2, fn3, fn4);
console.log(res(1)); //11

export {};
