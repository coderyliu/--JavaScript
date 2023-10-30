// ? IDBTransaction对象
// 用来异步操作数据库事务,所有的读写都要通过这个对象进行
let db;
let IDBTransaction;
let IDBObjectStore;
const IDBOpenDBRequest = indexedDB.open("coderyliu.online", 1);

// *属性
// db 返回当前事务的数据库对象IDBDatabase
// mode 返回当前事务的模式
// objectStoreNames 返回一个伪数组，成员是当前事务涉及的对象仓库的名字
// error 返回当前事务的错误，如果事务没有结束，或者手动终止，返回null
// onabort 事务中断监听函数
// onerror 事务失败监听函数
// oncomplete 事务成功监听函数

// *方法
// abort 终止当前事务
// objectStore 返回当前事务涉及的对象仓库IDBObjectStore

// 失败事件
IDBOpenDBRequest.onerror = () => {
  console.log("数据库打开失败");
};

// 成功事件
IDBOpenDBRequest.onsuccess = (event) => {
  db = IDBOpenDBRequest.result;

  IDBTransaction = db.transaction(["test"], "readwrite");
  
  IDBTransaction.onerror = () => {
    console.log('transaction error')
  }

  IDBTransaction.oncomplete = () => {
    console.log('transaction  complete')
  }

  IDBObjectStore = IDBTransaction.objectStore('test')



  console.log(IDBTransaction)

  console.log("数据库打开成功");
};

IDBOpenDBRequest.onupgradeneeded = (event) => {
  console.log(event);
  console.log("数据库升级");
};
