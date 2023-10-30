// todo formData是为了XMLHttpRequest穿参定义的，主要是为了序列化表单（key/value）结构

// 获取到页面的form表单元素
const formEl = document.querySelector("#myForm");
// 根据获取到的表单初始化一个FormData对象
const formData = new FormData(formEl);
// 根据form表单中的name来获取对应的value值
const name = formData.get("name");
const password = formData.get("password");

// ?可以获取key为name的所有值，返回一个数组
const valueArr = formData.getAll("name");

// ?也可以在其基础之上添加一些数据
// !如果key已经存在，会将值添加到末尾，而不会覆盖
formData.append("age", 22);
formData.append("sex", "男");
formData.append(
  "hobbies",
  JSON.stringify(["basketball", "pingpang", "swimming", "football"])
);

// ?也可以删除formFData中的数据
formData.delete("hobbies");

// ?判断formData中是否含有某些健
const isContainAge = formData.has("age");
console.log(isContainAge);

// ?还可以修改已经存在的值
formData.set("age", 23);

for (const v of formData) {
  console.log(v);
}

console.log(formData.values());
