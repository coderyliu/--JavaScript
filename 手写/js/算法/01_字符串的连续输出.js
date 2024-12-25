// 要求：如下字符串
// 如果字符串中的数字是连续的，输出开始~结尾，如果不连续直接输出
// '1,2,3,5,7,8,10'-->输出 '1~3,5,7~8,10'

const str = "1,1,3,4,5,7,8,10,14,25,26,15";
const str2 = "1,2,4,5,7,8,10,14,25,26,15";
const str3 = "1,2,3,4,5,7,8,10,14,25";

/**
 * @param {string} str
 * @return {string}
 */
const output = (str) => {
  // 首先转为数组并且排序
  let arr = str
    .split(",")
    .map((item) => +item)
    .sort((a, b) => a - b);

  // 去重
  arr = [...new Set(arr)];

  // 遍历数组
  const result = [];
  let start = 0; //开始位置索引
  let next = 1; //下一个位置索引
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 === arr[next] && next < arr.length) {
      next++;
    } else {
      if (next - 1 === start) {
        result.push(arr[start]);
      } else {
        result.push(`${arr[start]}~${arr[i]}`);
      }

      start = next;
      next++;
    }
  }

  return result.join(",");
};

console.log(output(str));
console.log(output(str2));
console.log(output(str3));
