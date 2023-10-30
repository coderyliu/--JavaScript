// ? IDBCursor对象-代表对象指针，用来遍历数据仓库或索引记录
// ? 一般通过IDBObjectStore.openCursor()获取
let db;
let IDBTransaction;
let IDBObjectStore;
const IDBOpenDBRequest = indexedDB.open("coderyliu.online", 1);

// *属性
// value 返回当前记录的值
// key 返回当前记录的主键
// primaryKey 返回当前记录的主键
// source 返回正在遍历的对象仓库或者索引
// direction 指针遍历方向 next(从头向后) nextunique (从头向后，重复的只遍历一次) prev(从后向前) prevunique

// *方法
// advance(n) 指针向前移动n个位置
// continue 指针向前移动一个位置，可以接受一个主键作为参数
// delete 删除当前位置的记录
// update 更新当前位置的记录

// 失败事件
IDBOpenDBRequest.onerror = () => {
  console.log("数据库打开失败");
};

// 成功事件
IDBOpenDBRequest.onsuccess = (event) => {
  db = IDBOpenDBRequest.result;

  IDBTransaction = db.transaction(["test"], "readwrite");
  IDBObjectStore = IDBTransaction.objectStore('test')

  IDBObjectStore.openCursor(null,'prev').onsuccess = (e) => {
    const cursor = e.target.result
    const trEl = document.createElement('tr')
    const tableEl = document.createElement('table')
    if(cursor){
      trEl.innerHTML = `<td>${cursor.value.name}</td>
      <td>${cursor.value.age}</td><td>${cursor.value.height}</td>`
      
      tableEl.appendChild(trEl)
      cursor.continue()
    }else{
      console.log('Entries all displayed')
    }
    document.body.append(tableEl)
  }
};

IDBOpenDBRequest.onupgradeneeded = (event) => {
  console.log("数据库升级");
};
