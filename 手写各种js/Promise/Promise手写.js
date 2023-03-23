function LyPromise(executor){
  this.promiseStatus='pending'
  this.promiseResult=''
  this.callbacks=[]

  let that=this
  function resolve(data){
    if(that.promiseStatus!=='pending'){
      return
    }

    that.promiseStatus='fullFilled'
    that.promiseResult=data

    setTimeout(()=>{
      that.callbacks.forEach(callback=>callback.onResolved())
    })
  }

  function reject(data){
    if(that.promiseStatus!=='pending'){
      return
    }

    that.promiseStatus='rejected'
    that.promiseResult=data

    setTimeout(()=>{
      that.callbacks.forEach(callback=>callback.onRejected())
    })
  }


  try {
    executor(resolve,reject)
  } catch (error) {
    reject(error)
  }
}

LyPromise.prototype.then=function(onResolved,onRejected){
  if(typeof onResolved!=='function'){
    onResolved=value=>value
  }

  if(typeof onRejected!=='function'){
    onRejected=err=>err
  }

  return new LyPromise((resolve,reject)=>{

    let that=this
    function callback(fn){
      const res=fn(that.promiseResult)

      if(res instanceof LyPromise){
        res.then((value)=>{
          resolve(value)
        },(err=>{
          reject(err)
        }))
      }else{
        resolve(res)
      }
    }


    if(this.promiseStatus==='fullFilled'){
      setTimeout(()=>{
        callback(onResolved)
      })
    }

    if(this.promiseStatus==='rejected'){
      setTimeout(()=>{
        callback(onRejected)
      })
    }

    if(this.promiseStatus==='pending'){
      this.callbacks.push({
        onResolved(){
          callback(onResolved)
        },
        onRejected(){
          callback(onRejected)
        }
      })
    }

  })
}

LyPromise.prototype.catch=function(onRejected){
  if(typeof onRejected!=='function'){
    onRejected=err=>err
  }

  return new LyPromise((resolve,reject)=>{
    if(this.promiseStatus!=='rejected'){
      return
    }

    setTimeout(()=>{
      reject(onRejected(this.promiseResult))
    })
  })
}

const p=new LyPromise((resolve,reject)=>{
  console.log(1)
  resolve({name:'coder'})
}).then(res=>{
  console.log(res)
},err=>{
  console.log(err)
})

const p2=new LyPromise((resolve,reject)=>{
  console.log(1)
  reject({err:'错误'})
}).catch((err)=>{
  console.log(err)
})

console.log(p)
console.log(p2)
