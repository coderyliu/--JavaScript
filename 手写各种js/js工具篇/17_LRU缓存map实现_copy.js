// LRU指的是最近优先缓存
// 当我们考虑内存优先的时候，LRU缓存就很重要了
// 特点:1-有序  2-哈希表存储：map(这里就别用数组和set了，它们两个get/set的速度很慢)

class LRU{
  constructor(limit){
    this.map=new Map()
    this.limit=limit
  }

  set(key,value){
    if(this.map.has(key)){
      this.map.delete(key)
    }
    this.map.set(key,value)

    if(this.map.size>this.limit){
      this.map.delete(Object.keys(this.map)[0])
    }
  }

  get(key){
    if(!this.map.has(key)){
      return 
    }else{
      const value=this.map.get(key)
      this.map.delete(key)
      this.map.set(key,value)

      return value
    }
  }
}

const lru=new LRU(2)
lru.set('name','coder')
lru.set('age',21)
console.log(lru)
console.log(lru.get('name'))
console.log(lru)
