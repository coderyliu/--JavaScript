// ?File类更加丰富了我们对文件系统的操作
// ?File继承自Blob
// todo 1.构造器模式 File([source],filename,options) source可以是Blob,String,ArrayBuffer,ArrayBufferView等
const file = new File(["hello"], "hello.txt", { type: "text/plain" });

console.log(file);
console.log(file.arrayBuffer().then(res=>console.log(res)))

// todo 2.更常见的是通过input上传文件获取file
document.querySelector('#file').addEventListener('change',(e)=>{
  // ?获取文件File对象,可以上传多个file,所以是files
  console.log(e.target.files)
  // ?获取第一个file
  console.log(e.target.files[0])
  // ?获取arrayBuffer 
  e.target.files[0].arrayBuffer().then(res=>console.log(res))
})

// todo 3.因为File继承自Blob，所以Blob上面的属性也是可以使用的
// .arrayBuffer() .stream() .text()
// .size .type .name