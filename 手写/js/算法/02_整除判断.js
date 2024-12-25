// 输入一个整数，如果能够被3整除，则输出 Fizz
// 如果能够被5整除，则输出 Buzz
// 如果既能被3整数，又能被5整除，则输出 FizzBuzz
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}
