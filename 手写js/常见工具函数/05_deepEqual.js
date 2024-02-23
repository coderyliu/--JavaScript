// 深比较函数
const deepEqual = (x, y) => {
  if (x === y) return true;
  if (
    typeof x === "object" &&
    x !== null &&
    typeof y === "object" &&
    y !== null
  ) {
    // 判断对象长度是否相等
    const keysX = Object.getOwnPropertyNames(x);
    const keysY = Object.getOwnPropertyNames(y);
    if (keysX.length !== keysY.length) return false;
    for (const key of keysY) {
      if (!deepEqual(x[key], y[key])) return false;
    }

    return true;
  }

  return false;
};

console.log(deepEqual({}, {})); //true
console.log(deepEqual(1, "1")); //false
console.log(deepEqual(1, 1)); //true
console.log(deepEqual({ name: "kobe" }, { name: "coder" })); //false
