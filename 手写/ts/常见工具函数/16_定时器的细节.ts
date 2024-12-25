// 定时器的细节
// !事件队列中最多存放两个setInterval的回调函数，多余的setInterval的回调函数就会被丢弃，因此，大多数用户都会使用setTimeout来代替setInterval

// 用setTimeout实现setInterval
const setInterval = (fn: Function, time: number) => {
  let timer;
  function interval() {
    fn();
    timer = setTimeout(interval, time);
  }
  interval();
  return () => clearTimeout(timer);
};

// 用setInterval实现setTimeout
const setTimeout = (fn: Function, time: number) => {
  let timer;
  function interval() {
    if (timer) clearInterval(timer);
    fn();
    timer = setInterval(interval, time);
  }
  interval();
  return () => clearInterval(timer);
};

export {};
