// 我们知道js是单线程的，在js中存在事件循环机制，例如：我们把script当做一个宏任务，还有定时器、网络请求、IO操作、数据库读取、canvas绘图等等都是宏任务
// 定时器中有setTimeout、setInterval全局工具函数
// 在执行的时候，setTimeout会在一定时间之后执行回调函数，setInterval会一直执行回调函数，直到被清除
// 但是，我们的事件循环队列中存在这样的机制，如果setInterval的回调函数执行时间超过了设定的时间，下一个setInterval的回调函数就会等待
// 如果有多个setInterval，那么就会等待时间最短的setInterval执行完毕之后，再执行下一个setInterval的回调函数
// !事件队列中最多存放两个setInterval的回调函数，多余的setInterval的回调函数就会被丢弃，因此，大多数用户都会使用setTimeout来代替setInterval

/**
 * @description 用setTimeout实现setInterval
 * @param {function} fn
 * @param {number} time
 */
const setInterval = (fn, time) => {
  let timer = null;

  function interval() {
    fn();
    timer = setTimeout(interval, time);
  }

  interval();

  return () => clearTimeout(timer);
};

/**
 * @description 用setInterval实现setTimeout
 * @param {function} fn
 * @param {number} time
 */
const setTimeout = (fn, time) => {
  let timer = null;

  function interval() {
    if (timer) clearTimeout(timer);
    fn();
    timer = setInterval(interval, time);
  }

  interval();

  return () => clearTimeout(timer);
};
