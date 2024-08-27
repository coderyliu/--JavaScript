// 迭代器：实质上就是对数据结构进行遍历的对象
// 这个对象必须有一个next方法，每次调用next方法，返回一个对象，对象中必须有一个done属性，表示是否遍历完成，如果done为true，则遍历完成，否则表示没有遍历完成，同时还需要有一个value属性，表示当前遍历到的值

//编写一个迭代器
const iterator = {
  next() {
    return { done: "false", value: "abc" };
  }
};

//数组
const names = ["abc", "cba", "nba"];

let index = 0;
//创建一个数组迭代器
const namesIterator = {
  next() {
    if (index < names.length) {
      return { done: "false", value: names[index++] };
    } else {
      return { done: "true", value: undefined };
    }
  }
};

console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
