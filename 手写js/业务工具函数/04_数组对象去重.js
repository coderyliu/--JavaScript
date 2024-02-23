const arr = [
  { name: "coder", age: 18 },
  { name: "coder", age: 18 },
  { name: "kobe", age: 18 },
  { name: "kobe", age: 18 },
];

// 实现方式一：filter结合map
/**
 * @description 数组对象去重
 * @param {Array} arr
 */
const uniqueArr = (arr) => {
  const map = new Map();
  return arr.filter(
    (item) => !map.has(item.name) && map.set(item.name, JSON.stringify(item))
  );
};

console.log(uniqueArr(arr));

// 实现方式二：借助第三方库：lodash中的uniqBy
const uniqueArrTwo = (arr) => {
  return _.uniqBy(arr, "name");
}

console.log(uniqueArrTwo(arr))

// 实现方式三：深度比较deepIsEqual()