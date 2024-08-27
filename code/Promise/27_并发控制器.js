// 并发控制
class Scheduler {
  constructor(maxCount) {
    this.maxCount = maxCount;
    this.runCount = 0;
    this.queue = [];
  }

  addTask(fn, delay) {
    const task = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          fn();
        }, delay);
      });
    };

    this.queue.push(task);
  }

  runTask() {
    for (let i = 0; i < this.queue.length; i++) {
      this.requestData();
    }
  }

  requestData() {
    if (this.queue.length || this.runCount >= this.maxCount) {
      return;
    }

    this.runCount++;
    this.queue
      .shift()()
      .then((res) => {
        this.runCount--;
        this.requestData();
      });
  }
}

const scheduler = new Scheduler(2);

// 把所有任务添加到队列中，先进先出
scheduler.addTask(1000, "1");
scheduler.addTask(500, "2");
scheduler.addTask(300, "3");
scheduler.addTask(400, "4");

scheduler.runTask();
