// ES14数组新增加了三个方法：toSpliced、toReversed、toSorted
// 数组的spliced、sort、reverse方法都会改变原数组，基于这三个方法新提出三个方法，不会改变原数组，而是返回新的数组
// 1. toSpliced
const arr = [1,2,3]
// 新增
const newArr1 = arr.toSpliced(1,0,4,5,6)
// 删除
const newArr2 = arr.toSpliced(1,1)
// 修改
const newArr3 = arr.toSpliced(1,1,9)
console.log(newArr1, arr)
console.log(newArr2, arr)
console.log(newArr3, arr)

// 2. toReversed
const newArr4 = arr.toReversed()
console.log(newArr4)

// 3. toSorted
// 不传函数，默认是从小到大排序
const newArr5 = arr.toSorted()
// 传递函数
const arr2 = [1, 2, 3, 7, 4,5]
const newArr6 = arr2.toSorted((a, b) => {
  console.log(a, b)
  // a - b > 0 正序
  // a - b < 0 倒序
  // a - b = 0 不交换位置
  return a - b
})
console.log(newArr6)