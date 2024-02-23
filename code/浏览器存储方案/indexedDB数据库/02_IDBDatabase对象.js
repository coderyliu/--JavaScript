// IDBDatabase数据库对象
// 数据库打开成功,可以从IDBOpenDBRequest的result中，拿到一个IDBDatabase对象
let db;
let testObjectStore
const IDBOpenDBRequest = indexedDB.open('coderyliu.online', 1)

// *IDBDatabase属性
// name 数据库名称
// version 数据库版本
// objectStoreNames 所有object store 名字
// onclose 数据库关闭监听事件
// onerror 数据库访问失败监听函数
// onabort 事务终止监听函数
// onversionChange 数据库版本变化触发

// *IDBRequest方法
// createObjectStore 创建存放数据的对象仓库
// deleteObjectStore 删除存放数据的对象仓库 返回一个IDBObjectStore对象仓库
// transaction 返回一个IDBTransaction事务对象
// close 关闭数据库连接 实际会等所有事务完成后再关闭

// 失败事件
IDBOpenDBRequest.onerror = () => {
  console.log('数据库打开失败')
}

// 成功事件
IDBOpenDBRequest.onsuccess = (event) => {
  db = IDBOpenDBRequest.result
  console.log(db.name + db.version)
  console.log(db.objectStoreNames) // ? DOMStringList

  // !打开数据库成功这个函数里面，不要创建数据库等操作，会报错,尽量在upgradeneeded中完成

  console.log('数据库打开成功')
}

// ? 新建数据库后续的主要操作是在upgradeneeded事件的监听函数中完成的
IDBOpenDBRequest.onupgradeneeded = (event) => {
  db = IDBOpenDBRequest.result
  if(!db.objectStoreNames.contains('test')){
    // 可以接受两个参数：
    // name: 对象仓库名称
    // options: 额外选项 { autoIncrement: false,keyPath: 'id' }
    // autoIncrement和keyPath同时存在表示主键采用ID自增，切对象中不能少了id属性
    testObjectStore = db.createObjectStore('test',{ autoIncrement: true })
  }
  // 创建一个IDBTransaction事务对象
  // 第一个参数是一个数组，里面是所涉及的对象仓库，通常只有一个
  // 第二个参数是一个表示操作类型的字符串，目前操作类型只有两个:readwrite读写 readonly只读 默认readonly
  db.transaction(['test'])

  console.log(testObjectStore)
  console.log('数据库升级')
}
