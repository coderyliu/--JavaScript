// 大数相加:
// js最大的安全整数为2**53次方，如果超过该值，就会不准确
// 精度丢失--IEE754标准
// 6453234253452432+7326362323251323
const num1 = 6453234253452432;
const num2 = 7326362323251323;

// 大数相加
const bigNumberSum = (num1: number, num2: number): string => {
  // * 实现方式一：BigInt大整数
  // return String(BigInt(num1) + BigInt(num2));

  // * 实现方式二：大数相加算法
  const arr1 = num1.toString().split("").reverse();
  const arr2 = num2.toString().split("").reverse();
  const result: number[] = [];
  let flag = 0;
  const len = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    const num1 = arr1[i] ?? 0;
    const num2 = arr2[i] ?? 0;
    let sum = Number(num1) + Number(num2) + flag;
    if (sum >= 10) {
      flag = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      flag = 0;
    }
    result.push(sum);
  }
  if (flag) {
    result.push(flag);
  }
  return result.reverse().join("");
};

// 测试
console.log(bigNumberSum(num1, num2));

export {};
