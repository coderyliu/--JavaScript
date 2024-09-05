// 1. 将驼峰化的命名方式转换为kobe式命名方式
// 例如: 'getElementById' => 'get-element-by-id'

const str = "getElementById";
function caseToKobe(str: string): string {
  // 方式一：遍历重新拼接
  // let res = "";
  // for (const s of str) {
  //   if (s.toUpperCase() === s) {
  //     res += `-${s.toLowerCase()}`;
  //   } else {
  //     res += s;
  //   }
  // }

  // return res;

  // 方式二：使用正则表达式
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}
console.log(caseToKobe(str));

// 2. 将kobe式命名方式转换为驼峰化的命名方式
const str2 = "get-element-by-id";
function kobeToCase(str: string): string {
  // 方式一：使用正则表达式
  return str.replace(/-(\w)/g, (_, match) => match.toUpperCase());

  // 方式二：使用split和map
  // return str.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");
}
console.log(kobeToCase(str2));

export {};
