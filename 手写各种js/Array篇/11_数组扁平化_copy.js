// 递归写法
function flatter(arr) {
  if (arr.length <= 1) return arr

  return arr.reduce((pre, cur) => {
    return Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur]
  }, [])
}

// 迭代写法
function flatter2(arr) {
  while(arr.some((v) => Array.isArray(v))){
    arr=[].concat(...arr)
  }

  return arr
}