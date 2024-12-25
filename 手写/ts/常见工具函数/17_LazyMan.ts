// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

class LazyManClass {
  private taskList: Function[];

  constructor(name: string) {
    // 任务队列
    this.taskList = [];
    // 初始化
    const fn = () => {
      console.log(`Hi! This is ${name}`);
      this.next();
    };
    this.taskList.push(fn);

    // 清空任务队列
    setTimeout(() => {
      this.next();
    }, 0);
  }

  // eat方法
  eat(name: string) {
    const fn = () => {
      console.log(`Eat ${name}`);
      this.next();
    };
    this.taskList.push(fn);
    return this;
  }

  // sleep方法
  sleep(time: number) {
    const fn = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time);
    };
    this.taskList.push(fn);
    return this;
  }

  // sleepFirst方法
  sleepFirst(time: number) {
    const fn = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time);
    };
    this.taskList.unshift(fn);
    return this;
  }

  private next() {
    const fn = this.taskList.shift();
    fn && fn();
  }
}

function LazyMan(name: string) {
  return new LazyManClass(name);
}

LazyMan("Hank").eat("dinner").sleep(1000).eat("supper"); // Hi! This is Hank! Eat dinner~ Wake up after 1000 Eat supper~
LazyMan("Hank").eat("dinner").sleepFirst(1000).eat("supper"); // Wake up after 1000 Hi! This is Hank! Eat dinner~ Eat supper~

export {};
