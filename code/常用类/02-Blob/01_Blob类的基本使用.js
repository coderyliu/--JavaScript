// ?首先:Blob是什么呢?
// *Blob -- Binary Large Object 二进制类型的大对象
// *Blob对象表示一个不可变的、原始数据的类文件对象，如果我们要更改Blob中的数据，那么我们是无法直接更改的
// *我们可以通过Blob.prototype.slice()截取Blob的多个部分，来生成一个新的Blob对象

// ?Blob的组成：blobParts + type
// *blobParts可以包括arrayBuffer、blob对象、String类型的值的数组
// *type:'application/json'  'text/plain'(默认)  'image/jpg'等等

// ?创建一个Blob对象
const obj={
  name:'coder',
  age:18,
  height:1.88
}

const blob=new Blob([JSON.stringify(obj,null,2)],{type:'application/json'})
// *生成的Blob对象，包含几个属性:size:byte,type
console.log(blob)

// ?Blob上还有实例方法属性
// *1.size  大小 字节
// *2.type 文件类型

// *3.slice(start,end,type)截取blob生成新的blob对象
// start 开始截取的字节的位置 负数从后向前
// end 截取的blob片段的最后的字节的位置 负数从后向前
// type 生成的新的blob对象的type
const blobSlice=blob.slice(2,5,'text/plain')
console.log(blobSlice)

// *4.stream() 返回一个ReadableStream对象,读取包含在Blob中的数据
const stream=blob.stream()
console.log(stream)

// *5.arrayBuffer()返回一个promise 包含blob数据中的所有二进制数据
blob.arrayBuffer().then(res=>{
  console.log(res)
})

// *6.text() 返回一个promise并且包含blob数据中的UTF-8 格式的 USVString
blob.text().then(res=>{
  console.log(res)
})


