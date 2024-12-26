// 要求：如下字符串
// 如果字符串中的数字是连续的，输出开始~结尾，如果不连续直接输出
// '1,2,3,5,7,8,10'-->输出 '1~3,5,7~8,10'

// 连续输出函数
const output = (str: string): string => {
  // 1. 将字符串转为数组
  const arr = str.split(",").map((item) => +item);

  // 2. 去重
  const newArr = [...new Set(arr)];

  // 3. 排序
  newArr.sort((a, b) => a - b);

  // 4. 遍历数组
  let start = 0; // 开始位置索引
  let end = 0; // 结束位置索引
  let res: string[] = []; // 结果数组
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] + 1 === newArr[i + 1]) {
      end = i + 1;
    } else {
      res.push(
        newArr[start] === newArr[end]
          ? `${newArr[start]}`
          : `${newArr[start]}~${newArr[end]}`
      );
      start = i + 1;
      end = i + 1;
    }
  }
  return res.join(",");
};

// 测试
const str = "1,2,3,5,7,8,10";
const str2 = "1,2,4,5,7,8,10,14,25,26,15";
const str3 = "1,2,3,4,5,7,8,10,14,25";
console.log(output(str));
console.log(output(str2));
console.log(output(str3));

export {};
