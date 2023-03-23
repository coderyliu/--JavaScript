function treeToList(data) {
  const treeObj = {}
  let res=[]

  data.forEach(a => {
    let {
      id,
      pid
    } = a

    if(!treeObj[id]){
      treeObj[id]={
        children:[]
      }
    }

    treeObj[id]={
      ...a,
      children:treeObj[id].children
    }

    const item=treeObj[id]
    if(pid===0){
      res.push(item)
    }else{
      if(!treeObj[pid]){
        treeObj[pid]={
          children:[]
        }
      }

      treeObj[pid].children.push(item)
    }
  })

  console.log(JSON.stringify(res,null,2))
}

const data = [
  // 注意这里，专门把pid为1的元素放一个在前面
  {
    id: 2,
    name: '部门2',
    pid: 1
  },
  {
    id: 1,
    name: '部门1',
    pid: 0
  },
  {
    id: 3,
    name: '部门3',
    pid: 1
  },
  {
    id: 4,
    name: '部门4',
    pid: 3
  },
  {
    id: 5,
    name: '部门5',
    pid: 4
  },
  {
    id: 7,
    name: '部门7',
    pid: 6
  },
]

treeToList(data)