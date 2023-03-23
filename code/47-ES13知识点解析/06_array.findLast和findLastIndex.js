// ?ES13中新增了数组的两个方法：findLast,和findLastIndex

const nums = [7, 14, 3, 8, 10, 9];
const lastEven = nums.findLast((num) => num % 2 === 0);
const lastEvenIndex = nums.findLastIndex((num) => num % 2 === 0);
console.log(lastEven); // 10
console.log(lastEvenIndex); // 4