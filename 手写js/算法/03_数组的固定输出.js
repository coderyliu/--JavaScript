// 要求
// 随机生成一个数组[2,3,10,5,7,9,10,12,15,20,33]
// 输出：[[2,3,5,7,9],[10,12,15],[20],[33]]

// 1. 随机生成一个数组
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};
let initArray = Array.from({ length: 10 }, () => getRandomNumber(0, 99));

// 2. 去重
initArray = [...new Set(initArray)];

// 3. 排序
initArray.sort((a, b) => a - b);

// 4. 分组
const map = {};
initArray.forEach((num) => {
  const key = Math.floor(num / 10);
  if (!map[key]) {
    map[key] = [];
  }
  map[key] = [...map[key], num];
});

// 5. 输出
const res = Object.values(map)
console.log(res);
