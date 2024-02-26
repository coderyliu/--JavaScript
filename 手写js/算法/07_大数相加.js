// 大数相加:
// js最大的安全整数为2**53次方，如果超过该值，就会不准确
// 精度丢失--IEE754标准
// 6453234253452432+7326362323251323
const num1 = 6453234253452432;
const num2 = 7326362323251323;

/**
 * @description 大数相加
 * @param {number} num1
 * @param {number} num2
 */
const bigNumberSum = (num1, num2) => {
  // 实现方式一：BigInt大整数
  const res = BigInt(num1) + BigInt(num2);

  // return String(res);

  // 实现方式二：转为字符串拆分为数组，翻转，进位相加
  const num1Arr = num1.toString().split("").reverse();
  const num2Arr = num2.toString().split("").reverse();
  const result = [];
  let flag = 0;
  const len = Math.max(num1Arr.length, num2Arr.length);
  for (let i = 0; i < len; i++) {
    const Num1 = num1Arr[i] ?? 0;
    const Num2 = num2Arr[i] ?? 0;
    let sum = Number(Num1) + Number(Num2) + flag;
    if (sum >= 10) {
      sum = sum % 10;
      flag = 1;
    } else {
      flag = 0;
    }

    result.push(sum);
    if (i === len - 1 && flag) {
      result.push(flag);
    }
  }

  return result.reverse().join("");
};

console.log(bigNumberSum(num1, num2));
