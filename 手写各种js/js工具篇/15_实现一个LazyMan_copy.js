// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

class _LazyMan{
  constructor(name){
    this.taskList=[]

     const printName=()=>{
      console.log(`Hi This is ${name}`)

      this.next()
    }
    this.taskList.push(printName)

    setTimeout(()=>{
      this.next()
    },0)
  }

  sleep(payload){
    const fn=()=>{
      setTimeout(()=>{
        console.log(`wake up after ${payload}`)
        
        this.next()
      },payload*1000)
    }

    this.taskList.push(fn)
    return this 
  }

  eat(name){
    const fn=()=>{
      console.log(`Eat ${name}`)
      this.next()
    }

    this.taskList.push(fn)
    return this
  }

  sleepFirst(payload){
    const fn=()=>{
      setTimeout(()=>{
        console.log(`wake up after ${payload}`)
        
        this.next()
      },payload*1000)
    }

    this.taskList.unshift(fn)
    return this
  }

  next(){
    const task=this.taskList.shift()
    task&&task()
  }
}

function LazyMan(name) {
  return new _LazyMan(name)
}
// LazyMan('coder')
// LazyMan('coder').eat('fish').eat('beef')
LazyMan('coder').eat('fish').sleepFirst(5)
// LazyMan('coder').eat('fish').sleep(5000).sleepFirst(10000)
