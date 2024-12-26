// 要求
// 随机生成一个数组[2,3,10,5,7,9,10,12,15,20,33]
// 输出：[[2,3,5,7,9],[10,12,15],[20],[33]]

const output = (min: number, max: number, length: number): number[][] => {
  // 1. 随机生成一个数组
  const getRandomNumber = () => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const arr = Array.from({ length }, () => getRandomNumber());

  // 2. 去重
  const newArr = [...new Set(arr)];

  // 3. 排序
  newArr.sort((a, b) => a - b);

  // 4. 分组
  const res: number[][] = [];
  for (let i = 0; i < newArr.length; i++) {
    const idx = Math.floor(newArr[i] / 10);
    if (!res[idx]) {
      res[idx] = [];
    }
    res[idx].push(newArr[i]);
  }

  return res;
};

// 测试
console.log(output(0, 99, 10));

export {};
