type uniqueArr = {
  [key: string]: any;
};

const arr = [
  { name: "coder", age: 18 },
  { name: "coder", age: 20 },
  { name: "kobe", age: 18 },
  { name: "kobe", age: 30 }
];

// 方法一： 借助哈希表 + 唯一key
function unique(arr: uniqueArr[]) {
  const map = new Map();
  arr.forEach((item) => map.set(item.name, JSON.stringify(item)));
  return Array.from(map.values()).map((item) => JSON.parse(item));
}

console.log(unique(arr));

// 方法二：借助第三方库 lodash
// import _ from "lodash";
// console.log(_.uniqBy(arr, "name"));

export {};
