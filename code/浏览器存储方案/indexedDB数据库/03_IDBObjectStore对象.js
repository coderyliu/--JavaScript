// ?IDBObjectStore对象仓库对象
// 1.db.createObjectStore()返回对象仓库
// 2.db.transaction()返回一个事务对象,IDBTransaction.objectStore()返回对象仓库

// * IDBObjectStore属性
// name 当前对象仓库名称
// transaction 当前对象仓库所属的事务对象
// autoIncrement 表示主键是否递增
// keyPath 返回当前对象仓库的主键
// indexNames 返回一个伪数组，包含了当前对象仓库的所有索引

// *IDBCreateStore方法
// add 向仓库添加数据,如果主键相同会报错;返回一个IDBRequest对象;更新数据必须使用put方法 第一个参数：键值，第二个参数：主键
// put 更新数据 第一个参数新数据，第二个参数为主键,主键自增必填
// delete 删除数据 删除指定key 的数据记录
// clear 删除当前对象仓库的所有记录
// count 计算当前对象仓库的所有记录数量
// getKey 获取主键
// get 获取主键对应的数据记录
// getAll 获取对象仓库的所有记录
// getAllKeys 获取对象仓库的所有主键
// index
// createIndex 只能在versionChange 函数里面调用

let db
const IDBOpenDBRequest = indexedDB.open('coderyliu.online', 1)

// 失败事件
IDBOpenDBRequest.onerror = () => {
  console.log('数据库打开失败')
}

// 成功事件
IDBOpenDBRequest.onsuccess = (event) => {
  db = IDBOpenDBRequest.result

  const IDBTransaction = db.transaction(['test'], 'readwrite')
  const testStore = IDBTransaction.objectStore('test')
  // 1. 添加数据
  // testStore.add({name: 'coder',age: 23,height: 1.88})

  // 2. 更新数据 更新数据是替换,不是合并
  // testStore.put({ name: 'coderyliu' }, 1)

  // 3. 删除指定主键的记录
  // testStore.delete(1)

  // 4. 删除当前对象仓库的所有记录
  // testStore.clear()

  // 5. 计算当前对象仓库的所有记录数量
  // console.log(testStore.count())

  // 6. 获取主键
  // console.log(testStore.getKey(3))

  // 7. 获取主键对应的数据记录
  // console.log(testStore.get(3))

  // 8. 获取对象仓库的所有记录
  // 8.1 获取所有数据记录
  // console.log(testStore.getAll())
  // 8.2 获取所有符合条件的数据记录
  // testStore.getAll(query,count)

  // 9. 获取对象仓库的所有主键
  // console.log(testStore.getAllKeys())
  // 获取所有符合条件的主键
  // testStore.getAllKeys(query,count)

  // 10. 获取指定名称的索引对象 返回IDBIndex
  // console.log(testStore.index(name)) 

  // 11. 新建当前数据库的一个索引

  // 12. 删除指定的索引 deleteIndex(name)
  // 13. 获取指针对象 openCursor()
  // 14. openKeyCursor 获取一个指针对象
}

IDBOpenDBRequest.onupgradeneeded = (event) => {
  console.log(event)
  console.log('数据库升级')
}

