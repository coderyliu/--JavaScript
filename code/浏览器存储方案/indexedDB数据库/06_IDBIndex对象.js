// ? IDBIndex对象-代表数据库的索引,通过这个对象可以获取数据库里面的记录，数据记录的默认主键就是带有索引
// ? IDBIndex对象主要用于通过除主键外的其他键，建立索引获取对象
let db;
let IDBTransaction;
let IDBObjectStore;
const IDBOpenDBRequest = indexedDB.open("coderyliu.online", 1);

// *属性
// name 索引名称
// objectStore 索引所在的对象仓库
// keyPath 索引的主键
// unique 表示创建索引时是否允许相同的主键

// *方法
// count() 获取记录的数量
// get(key) 获取符合条件的指定的主键的记录 返回一个IDBRequest对象
// getKey(key) // 获取指定的主键
// getAll()
// getAllKeys() 获取所有主键
// openCursor() 获取IDBCursor对象，用来遍历所有条目

// 失败事件
IDBOpenDBRequest.onerror = () => {
  console.log("数据库打开失败");
};

// 成功事件
IDBOpenDBRequest.onsuccess = (event) => {
  db = IDBOpenDBRequest.result;

  IDBTransaction = db.transaction(["test"], "readwrite");
  IDBObjectStore = IDBTransaction.objectStore("test");
  // IDBObjectStore.put({ name: 'kobe', age:44, height: 1.98 }, 4)
  // IDBObjectStore.put({ name: 'curry', age:34, height: 1.88 }, 5)
  // IDBObjectStore.put({ name: 'james', age:38, height: 1.99 }, 6)
  const myIndex = IDBObjectStore.index("name");
  // console.log(myIndex.count())
  // console.log(myIndex.get('curry'))
  // console.log(myIndex.getAll())
  // console.log(myIndex.getAllKeys())
  myIndex.openCursor().onsuccess = (e) => {
    const cursor = e.target.result;
    const trEl = document.createElement("tr");
    const tableEl = document.createElement("table");
    if (cursor) {
      trEl.innerHTML = `<td>${cursor.value.name}</td>
      <td>${cursor.value.age}</td><td>${cursor.value.height}</td>`;

      tableEl.appendChild(trEl);
      cursor.continue();
    } else {
      console.log("Entries all displayed");
    }
    document.body.append(tableEl);
  };
};

IDBOpenDBRequest.onupgradeneeded = (event) => {
  // db = IDBOpenDBRequest.result;
  // IDBObjectStore = db.createObjectStore('test')
  // const myIndex = IDBObjectStore.createIndex('name', 'name', {unique: true})
  // console.log(myIndex)

  console.log("数据库升级");
};
