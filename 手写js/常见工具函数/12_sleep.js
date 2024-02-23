// sleep睡眠函数
// sleep函数的目的：是为了帮助我们在程序中等待一段时间，再去执行下一步

// 实现方式一：Promise + setTimeout
const sleepOne = (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

console.log("开始执行");

sleepOne(5000).then(() => {
  console.log("sleepOne");
});

console.log("结束执行");

// 执行结果：开始执行 => 结束执行 => sleepOne(等待5s)

// 实现方式二：async + await
async function foo() {
  console.log("开始执行");
  await sleepOne(5000);
  console.log("结束执行");
}

foo()
