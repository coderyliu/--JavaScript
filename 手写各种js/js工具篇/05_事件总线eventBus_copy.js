// 事件总线eventBus实际上就是用来组件之间的通信
// 他是我们的观察者模式，也是发布订阅模式
// vue2把事件总线放在框架中实现,$on  $off  $once  $emit
// vue3废除了上面这些，通过第三方库来实现，比如mitt

class EventBus{
  constructor(){
    this.eventBus={}
  }

  on(eventName,eventCallBack,thisArg){
    if(typeof eventCallBack!=='function'){
      throw new Error('the event callback is not a function')
    }

    if(typeof eventName!=='string'){
      throw new Error('the event name must be the string type')
    }

    let handlers=this.eventBus[eventName]
    if(!handlers){
      handlers=[]
      this.eventBus[eventName]=handlers
    }

    handlers.push({
      eventCallBack,
      thisArg
    })
  }

  emit(eventName,...args){
    if(typeof eventName!=='string'){
      throw new Error('the event name must be the string type')
    }

    const handlers=this.eventBus[eventName]
    if(!handlers) return
    handlers.forEach(handler=>{
      handler.eventCallBack.apply(handler.thisArg,args)
    })
  }

  off(eventName,eventCallBack){
    if(typeof eventCallBack!=='function'){
      throw new Error('the event callback is not a function')
    }

    if(typeof eventName!=='string'){
      throw new Error('the event name must be the string type')
    }

    let handlers=this.eventBus[eventName]
    if(!handlers) return
    for(let i=0;i<handlers.length;i++){
      if(handlers[i].eventCallBack===eventCallBack){
        handlers.splice(i,1)
      }
    }
  }
}

const eventBus= new EventBus()

eventBus.on('coder',function(payload){
  console.log(this,'coder',payload)
},{name:"coder"})

eventBus.emit('coder',123)
