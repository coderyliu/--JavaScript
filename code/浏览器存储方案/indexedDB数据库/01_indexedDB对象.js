// ?indexedDB数据库打开，open(name,version) 如果数据库不存在会创建一个数据库；如果指定的版本大于数据库指定的版本号，会发生升级
// ?open()方法是一个异步的操作 但是会立刻返回一个DBOpenDBRequest对象
const IDBOpenDBRequest = indexedDB.open('coderyliu.online', 1)
// indexedDB.deleteDatabase('coderyliu')

// 失败事件
IDBOpenDBRequest.onerror = () => {
  console.log('数据库打开失败')
}

// 成功事件
IDBOpenDBRequest.onsuccess = (event) => {
  // 比较两个主键是否为indexedDB的相同主键 0表示相同
  console.log(indexedDB.cmp(3,4)) // -1 表示第一个主键值小于第二个主键值
  console.log('数据库打开成功')
}

// ? 第一次打开会触发upgradeneeded事件，然后出发success事件
IDBOpenDBRequest.onupgradeneeded = (event) => {
  console.log(event)
  console.log('数据库升级')
}

