// ?FileReader类主要是用来读取Blob(File)的数据
// todo 1.直接使用 没有参数
const reader=new FileReader()

// todo 2.实例方法
// reader.readAsArrayBuffer(blob)//读取为arrayBuffer
// reader.readAsDataURL(blob)//读取为base64编码的data url
// reader.readAsText(blob,[encoding])//读取为encoding编码的文本数据
// reader.abort()//取消读取

// todo 3.读取过程中的事件
// loadstart--开始加载
// progress--读取过程中
// load--读取完成没有error
// abort---取消读取调用了abort
// error--出现error
// loadend--读取万成无论成功还是失败

// todo 4.读取完成后可以通过reader.result(结果 成功) reader.error(结果失败)来访问数据

// ?代码演示
document.querySelector('#file').addEventListener('change',(e)=>{
  const file=e.target.files[0]
  const reader=new FileReader()

  reader.onload=(e)=>{
    // 两种方法
    // 1.reader.result
    console.log(reader.result)
    // 2.event
    console.log(e.target.result)
  }

  reader.onerror=(e)=>{
    console.log(reader.error)
  }

  reader.readAsArrayBuffer(file)
})