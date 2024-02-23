/**
 * @description 实现一个事件总线，主要是用来组件之间的通信,也是发布订阅模式
 */
class EventBus {
  constructor() {
    this.eventBus = {};
  }

  // 事件订阅
  on(eventName, eventCallback, thisArg) {
    if (typeof eventName !== "string")
      throw new Error("the event name must be string type");
    if (typeof eventCallback !== "function")
      throw new Error("the event callback must be function");

    let handlers = this.eventBus[eventName];
    if (!handlers) {
      handlers = [];
      this.eventBus[eventName] = handlers;
    }

    handlers.push({
      eventCallback,
      thisArg,
    });
  }

  // 事件发布
  emit(eventName, ...args) {
    if (typeof eventName !== "string")
      throw new Error("the event name must be string type");

    const handlers = this.eventBus[eventName];
    if (!handlers) return;
    handlers.forEach((handler) => {
      handler.eventCallback.apply(handler.thisArg, args);
    });
  }

  // 事件取消订阅
  off(eventName, eventCallback) {
    if (typeof eventName !== "string")
      throw new Error("the event name must be string type");

    if (typeof eventCallback !== "function")
      throw new Error("the event callback must be function");

    const handlers = this.eventBus[eventName];
    if (!handlers) return;
    const newHandlers = [...handlers];
    newHandlers.forEach((handler, index) => {
      if (handler.eventCallback === eventCallback) {
        newHandlers.splice(index, 1);
      }
    });
  }

  // 事件只触发一次
  once(eventName, eventCallback, thisArg) {
    if (typeof eventName !== "string")
      throw new Error("the event name must be string type");
    if (typeof eventCallback !== "function")
      throw new Error("the event callback must be function");

    const tempCallback = (...args) => {
      this.off(eventName, tempCallback);
      eventCallback.apply(thisArg, args);
    };

    return this.on(eventName, tempCallback, thisArg);
  }
}
