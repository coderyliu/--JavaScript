// * 函数里判断会直接返回
const foo = (type) => {
  console.log(111);
  switch (type) {
    case "a":
      return "a";
    case "b":
      return "b";
    default:
      return "default";
  }
};

console.log(foo("a"));
console.log(foo("b"));

const bar = () => {
  const arr = [1, 2, 3];
  for (const item of arr) {
    console.log(item);
    if (item === 2) {
      // return 之后就不会执行下面的代码了 会直接结束循环，作为函数的结果返回
      return "2";
    } else if (item === 3) {
      return "3";
    }
  }
};
console.log(bar());
