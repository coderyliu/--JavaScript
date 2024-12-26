// var a = {
// 	b: 123,
// 	c: '456',
// 	e: '789',
// }
// var str=`a{a.b}aa{a.c}aa {a.d}aaaa`;
// => 'a123aa456aa {a.d}aaaa'

const parse = (str: string, obj: Record<string, any>): string => {
  // 栈
  const stack: string[] = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "}") {
      stack.push(str[i]);
    } else {
      let arr: string[] = [];
      while (stack[stack.length - 1] !== "{") {
        arr.unshift(stack.pop()!);
      }
      stack.pop();
      let key = arr.join("").split(".")[1];
      if (obj[key]) {
        stack.push(obj[key]);
      } else {
        stack.push(arr.join(""));
      }
    }
  }
  return stack.join("");
};

// 测试
const str = `a{a.b}aa{a.c}aa {a.d}aaaa`;
const str2 = `a{a.b}aa{a.c}aa {a.e}aaaa`;
const a = {
  b: 123,
  c: "456",
  d: "789"
};

console.log(parse(str, a)); // a123aa456aa {a.d}aaaa
console.log(parse(str2, a)); // a123aa456aa {a.e}aaaa

export {};
