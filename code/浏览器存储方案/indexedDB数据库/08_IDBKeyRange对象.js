// ? IDBKeyRange对象-代表对象仓库的一组主键，根据这组主键可以获取数据仓库里面的一组记录
// 可以将其作为IDBObjectStore的openCursor或者IDBIndex.openCursor(range)的参数
let db;
let IDBTransaction;
let IDBObjectStore;
const IDBOpenDBRequest = indexedDB.open("coderyliu.online", 1);

// *属性
// lower 返回下限
// upper 返回上限
// lowerOpen 布尔值，表示是否为开区间
// upperOpen 布尔值，表示是否为开区间

// *方法
// IDBKeyRange.lowerBound() // 指定下限
// IDBKeyRange.upperBound() // 指定上限
// IDBKeyRange.bound() // 同时指定上下限
// ? 以上三个方法默认包含断点值，可以传入一个布尔值，修改这个属性
// IDBKeyRange.only() // 指定只包含一个值

// 失败事件
IDBOpenDBRequest.onerror = () => {
  console.log("数据库打开失败");
};

// 成功事件
IDBOpenDBRequest.onsuccess = (event) => {
  db = IDBOpenDBRequest.result;

  IDBTransaction = db.transaction(["test"], "readwrite");
  IDBObjectStore = IDBTransaction.objectStore('test')

  // IDBObjectStore.add({ name: 'kobe', age:44, height: 1.98 }, 'kobe')
  // IDBObjectStore.add({ name: 'curry', age:34, height: 1.88 }, 'curry')
  // IDBObjectStore.add({ name: 'james', age:38, height: 1.99 }, 'james')

  IDBObjectStore.openCursor(IDBKeyRange.lowerBound(10), 'next').onsuccess = (e) => {
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
