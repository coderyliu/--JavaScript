// 节流
// ?原理：定时器、闭包、时间差
// ?应用场景：滚动条、窗口大小改变

type DefaultFn = (...args: any[]) => any;

const throttle = (
  fn: DefaultFn,
  interval: number = 1000,
  leading: boolean = false
) => {
  let lastTime: number = leading ? Date.now() : 0;

  function throttleFn(...args: any[]) {
    const nowTime = Date.now();
    const remainTime = nowTime - lastTime;
    if (remainTime - interval >= 0) {
      const result = fn.apply(this, args);
      lastTime = nowTime;
      return result;
    }
  }

  return throttleFn;
};

export default throttle;

export {};
