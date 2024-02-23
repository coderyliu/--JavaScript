// "｜> "表示管道运算符、将一个函数的返回值作为另一个函数的参数
// !截至目前这段代码还不能在浏览器或者node运行，须借助babel运行
let addOne = (x) => x + 1;
let multiplyByTwo = (x) => x * 2;
let divideBySix = (x) => x / 6;

let number = 6;

// 使用管道运算符来代替嵌套函数调用
let calculate = number |> divideBySix |> multiplyByTwo |> addOne;

console.log(calculate); // 输出：3
