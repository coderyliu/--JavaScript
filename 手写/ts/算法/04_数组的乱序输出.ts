// 要求：只能修改setTimeout到Math.floor,不能修改Math.floor,不能引用全局变量

// 这种方式肯定是乱序输出的，要求改为固定输出
// function print(n: number) {
//   setTimeout(() => {
//     console.log(n);
//     return () => {};
//   }, Math.floor(Math.random() * 1000));
// }
// for (let i = 0; i < 100; i++) {
//   print(i);
// }

// *方式一：setTimeout的第三个参数，会作为setTimeout的参数
function print(n: number) {
  setTimeout(
    (j) => {
      console.log(n);
      return () => {};
    },
    // ? 这种方式相当于改变了setTimeout的执行时间，都改为了100ms
    100,
    Math.floor(Math.random() * 1000)
  );
}

// * 方式二：立即执行函数
function printTwo(n: number) {
  setTimeout(
    (() => {
      console.log(n);
      return () => {};
    })(),
    Math.floor(Math.random() * 1000)
  );
}

// 测试
for (let i = 0; i < 100; i++) {
  // print(i);
  printTwo(i);
}

export {};
