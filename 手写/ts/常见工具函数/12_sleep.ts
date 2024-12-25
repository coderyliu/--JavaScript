// sleep睡眠函数
// sleep函数的目的：是为了帮助我们在程序中等待一段时间，再去执行下一步

// 实现方式一：Promise + setTimeout
const sleepOne = (delay: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

// 实现方式二：async + await
const sleepTwo = async (delay: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, delay));
};

// 执行
console.log("开始执行");
sleepOne(5000).then(() => {
  console.log("sleepOne");
});
console.log("结束执行");

export {};
