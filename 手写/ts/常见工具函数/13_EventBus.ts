/**
 * @description 实现一个事件总线，主要是用来组件之间的通信,也是发布订阅模式
 */

class EventBus {
  // 事件总线
  private eventBus: Record<string, Function[]> = {};

  constructor() {
    this.eventBus = {};
  }

  // 事件订阅
  on(eventName: string, eventCallback: Function) {
    let handlers = this.eventBus[eventName];
    if (!handlers) {
      handlers = [];
      this.eventBus[eventName] = handlers;
    }

    handlers.push(eventCallback);
  }

  // 事件发布
  emit(eventName: string, ...args: any[]) {
    const handlers = this.eventBus[eventName];
    if (!handlers) return;
    handlers.forEach((handler) => handler(...args));
  }

  // 事件取消订阅
  off(eventName: string, eventCallback: Function) {
    const handlers = this.eventBus[eventName];
    if (!handlers) return;
    this.eventBus[eventName] = handlers.filter(
      (handler) => handler !== eventCallback
    );
  }

  // 事件只触发一次
  once(eventName: string, eventCallback: Function) {
    const tempCallback = (...args: any[]) => {
      this.off(eventName, tempCallback);
      eventCallback.apply(this, args);
    };
    return this.on(eventName, tempCallback);
  }
}

export {};
