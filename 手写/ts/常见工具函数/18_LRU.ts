// LRU缓存map的实现
// 特点:1-有序  2-哈希表存储：map(这里就别用数组和set了，它们两个get/set的速度很慢)

class LRUCache {
  private length: number;
  public data: Map<any, any>;

  constructor(length: number) {
    this.length = length;
    this.data = new Map();
  }

  // get方法
  get(key: any) {
    const value = this.data.get(key);
    if (value) {
      this.data.delete(key);
      this.data.set(key, value);
    }
    return value ?? null;
  }

  // set方法
  set(key: any, value: any) {
    if (this.data.has(key)) {
      this.data.delete(key);
    }
    this.data.set(key, value);

    if (this.data.size > this.length) {
      this.data.delete(this.data.keys().next().value);
    }
  }
}

// 测试
const cache = new LRUCache(2);
cache.set(0, 1);
cache.set(1, 2);
console.log(cache.get(0));
cache.set(2, 3);
console.log(cache.get(1));
cache.set(3, 4);
console.log(cache.get(0));

export {};
