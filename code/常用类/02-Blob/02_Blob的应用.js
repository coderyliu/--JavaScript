// todo 1.blob的应用-文件上传（分片上传）
// ?基于Blob的特性：原始数据(存储在磁盘中)，不可变
// ?blob可以通过slice把原始数据切割，形成新的blob对象,然后再组合
// ?那么我们就可以在前端用户上传文件的时候进行slice()分片上传

// todo 2.blob的应用二-用作URL
// !之所以可以很容易的用作Url，是因为URL.createObjectURL(object)可以为File,Blob,MediaSource等创建一个url
// !创建完成之后，浏览器会有一个引用关系，既可以通过url===>blob映射到磁盘中的文件
// ?Blob可以很容易的用作<a /> <img />或者其他标签的URL
// ?既然可以作为他们的url,那么基于Blob的type属性，知道文件的类型，那么我们的浏览器可以下载或者上传Blob对象

// 代码演示
const blob = new Blob(["hello my name is coder"], { type: "text/plain" });
const url = URL.createObjectURL(blob);

const link = document.createElement("a");
link.textContent = "下载";
// *a标签的属性download 强制浏览器不跳转而是下载
link.download = "hello.txt";
link.href = url;
// !自动触发 点击触发下载
// link.click()
// !下载之后 销毁引用关系 但是就只能下载一次了，第二次这个引用就失效了
// URL.revokeObjectURL(link.href)

document.body.appendChild(link);

// todo 3.blob的应用三-转换为base64
// *base64是一种基于64个可打印字符来表示二进制的表示方法，它通常用来处理文本数据
// *绝大多数的浏览器支持一种Data URLs的特性，允许使用Base64对图片或者其它文件的二进制进行编码
// *将其作为文本字符插入网页中
// ?data urls的组成:data:(type);base,data(数据本身)
// 如下所示:
{
  /* <img src="data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7"> */
}

// 代码演示
// ?基于FilReader还可以实现文件上传图片的本地预览功能
const pictureEl = document.querySelector(".picture");
const readBlob = (e) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    pictureEl.src = event.target.result;
  };

  console.log(e);

  reader.readAsDataURL(e.target.files[0]);
};
document.querySelector("#file").addEventListener("change", readBlob);

// todo 4.blob的应用四-转换为arrayBuffer和stream
// ?blob和arrayBuffer是可以互相转换的 它们都可以存储二进制数据
// !Blob是不可变的，存储在磁盘中，arrayBuffer是在内存中，可以操作
// Blob===>arrayBuffer
// blob.arrayBuffer()

// arrayBuffer===>Blob
// new Blob([arrayBuffer])
