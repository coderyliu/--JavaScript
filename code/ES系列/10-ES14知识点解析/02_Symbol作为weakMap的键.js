// 以前WeakMap只能用对象作为键，现在可以利用Symbol来作为键了
const s = Symbol("aaa");

const wm = new WeakMap();

wm.set(s, "111");

console.log(wm);
