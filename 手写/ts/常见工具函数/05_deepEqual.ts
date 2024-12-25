// 深比较函数

// 判断是否是对象
const isObject = (resource: any) =>
  typeof resource === "object" && resource !== null;

// *递归实现
const deepEqual = (x: any, y: any) => {
  // 判断是否是相同值/引用
  if (x === y) return true;
  // 判断是否是对象
  if (isObject(x) && isObject(y)) {
    const keysX = Object.keys(x);
    const keysY = Object.keys(y);
    if (keysX.length !== keysY.length) return false;
    for (const key of keysX) {
      if (!keysY.includes(key) || !deepEqual(x[key], y[key])) return false;
    }
    return true;
  }
  return false;
};

console.log(deepEqual({}, {})); // true
console.log(deepEqual(1, "1")); //false
console.log(deepEqual(1, 1)); //true
console.log(deepEqual({ name: "kobe" }, { name: "coder" })); //false

const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  }
};

const obj2 = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  }
};

const obj3 = {
  a: 1,
  b: {
    c: 2,
    d: [3, 5]
  }
};

console.log(deepEqual(obj1, obj2)); // 输出: true
console.log(deepEqual(obj1, obj3)); // 输出: false

export default deepEqual;

export {};
