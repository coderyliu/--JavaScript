// ?在ES13中-ES2022中把数组或者字符串的at()加入ESMA中

// todo 在以前我们访问对象或者字符串都是通过[index]的方式来访问的，并且index必须是正值或者0
// *这样做的原因是因为在js中万物皆对象，数组也可以看成是一个对象，如果出现arr[-1]这种方式去访问
// *那么，在对象中-1会被看做是字符串，那么就不会访问到正常值

// todo at()的使用

// ?1.数组
const arr = [1, 2, 3];
console.log(arr.at(-1)); //3
console.log(arr.at(-2)); //2

// 等价于
console.log(arr[2]); //3
console.log(arr[1]); //2

// ?2.字符串
const str = "coderyliu";
console.log(str.at(-1)); //u
console.log(str.at(-2)); //i

// 等价于
console.log(str[str.length - 1]);
console.log(str[str.length - 2]);
