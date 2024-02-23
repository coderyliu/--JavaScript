// 节流
const throttle = (
  fn,
  interval,
  options = { immediate: true, resultCallBack }
) => {
  let lastTime = 0;

  const { immediate, resultCallBack } = options;

  const _throttle = (...args) => {
    const nowTime = Date.now();
    if (!immediate) lastTime = nowTime;

    const remainTime = nowTime - lastTime;
    if (remainTime >= interval) {
      const result = fn.apply(this, args);
      if (typeof resultCallBack === "function") resultCallBack(result);
      lastTime = nowTime;
    }
  };

  return _throttle;
};
