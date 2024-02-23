// workerThread1

let i=0

function simpleCount(){
  i++
  self.postMessage(i)
  setTimeout(simpleCount,1000)
}

simpleCount()

self.onmessage=(e)=>{
  postMessage(e.data,'呵呵~')
}