// ? IDBRequest对象-表示打开的数据库连接
// indexedDB.open()和indexedDB.deleteDatabase()会返回这个对象
let db;
let IDBTransaction;
let IDBObjectStore;
const IDBOpenDBRequest = indexedDB.open("coderyliu.online", 1);
console.log(IDBOpenDBRequest);

// *属性
// readState 等于pending 正在进行 done 操作正在完成
// result 返回请求的结果，如果失败，结果不可用，不可读取
// error 请求失败时，返回的错误对象
// onsuccess 指定success成功的事件监听
// onerror 指定error失败的事件监听
// transaction 返回当前请求正在进行的事务，如果不包含事务，返回null
// ? IDBOpenDBRequest对象继承了IDBRequest对象，提供了额外的两个监听属性
// ? onupgradeneeded onblocked

// 失败事件
IDBOpenDBRequest.onerror = () => {
  console.log("数据库打开失败");
};

// 成功事件
IDBOpenDBRequest.onsuccess = (event) => {
  db = IDBOpenDBRequest.result;

  IDBTransaction = db.transaction(["test"], "readwrite");

  IDBTransaction.onerror = () => {
    console.log("transaction error");
  };

  IDBTransaction.oncomplete = () => {
    console.log("transaction  complete");
  };

  IDBObjectStore = IDBTransaction.objectStore("test");
};

IDBOpenDBRequest.onupgradeneeded = (event) => {
  console.log(event);
  console.log("数据库升级");
};
