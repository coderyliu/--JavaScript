// 字符串的方法-trim去除字符串两端的空格
// 当然，在es6之后提供了去除字符串开头的空格和末尾空格的两个单独方法 trimStart和trimEnd
function lyTrim(str) {
  // ?1.表达式
  let newStr = str.replaceAll(' ', '')

  // ?2.正则
  let newStr2=str.replace(/^\s+|\s+$/g,'')

  return newStr2
}

let str = '  hello  '
console.log(lyTrim(str))
console.log(lyTrim(str).length)

console.log(str)
console.log('  hello  '.trim())