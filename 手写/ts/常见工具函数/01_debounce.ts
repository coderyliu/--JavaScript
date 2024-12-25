// 防抖函数
// ?原理：定时器、闭包
// ?应用场景：搜索框、滚动条、窗口大小改变

type DefaultFn = (...args: any[]) => any;

const debounce = (
  fn: DefaultFn,
  delay: number = 1000,
  immediate: boolean = true
) => {
  // 定时器
  let timer;
  // 是否立即执行
  let invoke: boolean = false;

  function debounceFn(...args: any[]) {
    if (timer) clearTimeout(timer);

    // 立即执行
    if (immediate && !invoke) {
      const result = fn.apply(this, args);
      invoke = true;
      return result;
    }

    timer = setTimeout(() => {
      const result = fn.apply(this, args);
      timer = null;
      invoke = false;
      return result;
    }, delay);
  }

  function cancel() {
    if (timer) clearTimeout(timer);
    timer = null;
    invoke = false;
  }

  return {
    debounceFn,
    cancel
  };
};

export default debounce;

export {};
