// 数组扁平化
// 最终结果为一维数组

const flatten = (arr: any[]): any[] => {
  // 实现方式一：递归
  if (!arr.length) return [];
  return arr.reduce((pre, cur) => {
    return Array.isArray(cur) ? pre.concat(flatten(cur)) : pre.concat(cur);
  }, []);

  // 实现方式二：迭代
  // if (!arr.length) return [];
  // while (arr.some((item) => Array.isArray(item))) {
  //   arr = [].concat(...arr);
  // }
  // return arr;

  // 实现方式三：正则
  // const res = JSON.parse("[" + JSON.stringify(arr).replace(/\[|\]/g, "") + "]");

  // return res;
};

export {};
