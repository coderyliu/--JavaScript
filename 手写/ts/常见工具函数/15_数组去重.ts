// 数组去重 - 简单的数据类型(string, number, boolean, null, undefined， symbol, BigInt)

const unique = (arr: any[]): any[] => {
  // *实现方式一：Set
  // return [...new Set(arr)];

  // *实现方式二：filter
  // return arr.filter((item, index) => arr.indexOf(item) === index);

  // *实现方式三：reduce
  return arr.reduce((pre, cur) => {
    return pre.includes(cur) ? pre : pre.concat(cur);
  }, []);

  // *实现方式四：includes
  // return arr.filter((item, index) => !pre.includes(item));

  // *实现方式五：Map
  // const map = new Map();
  // return arr.filter((item) => !map.has(item) && map.set(item, true));

  // *实现方式六：sort
  // return arr.sort().filter((item, index, self) => {
  //   return index === self.indexOf(item);
  // });
};

export {};
