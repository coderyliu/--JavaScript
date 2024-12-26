/**
 * @description 1234567变人民币形式1,234,567
 * @param {Number} num
 * @returns {String}
 */

const transform = (num: number): string => {
  let str = num.toString();
  let r = str.length - 1;
  let count = 0;
  const arr: string[] = [];
  while (r >= 0) {
    count++;
    arr.unshift(str[r]);
    if (count % 3 === 0 && r !== 0) {
      arr.unshift(",");
    }
    r--;
  }
  return arr.join("");
};

// 测试
console.log(transform(1234567)); // 1,234,567
console.log(transform(123456789)); // 123,456,789
console.log(transform(1234567899)); // 1,234,567,899

export {};
