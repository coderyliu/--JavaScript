// ?url中的编码和解码
// !浏览器为了安全，把url的大小规定为2kb左右

// todo 我们通过new URL()是包括了对url的编码
// ?常见的编码解码方式包括:
// todo 1.encodeURL--编码整个url字符串，但是不会编码 ：& ? / = #这类字符
// todo 2.decodeURL--解码还原之前的url字符串
// todo 3.encodeURLComponent--仅仅编码url组件(例如:搜索参数search hash pathname) 但是会编码 ：& ? / = #这类字符
// todo 4.decodeURLComponent--解码url组件

// *直接用就可以
const urlThree =
  'http://www.coderyliu.online:3000/hot/sing?name="coder"&age=18';

const encode = encodeURI(urlThree);
console.log(encode); //http://www.coderyliu.online:3000/hot/sing?name=%22coder%22&age=18

const encodeCpn = encodeURIComponent(urlThree);
console.log(encodeCpn); //http%3A%2F%2Fwww.coderyliu.online%3A3000%2Fhot%2Fsing%3Fname%3D%22coder%22%26age%3D18
