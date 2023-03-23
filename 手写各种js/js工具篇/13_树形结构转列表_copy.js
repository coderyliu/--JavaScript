// 广度优先遍历
function treeToList(data){
  const res=[]
  const queue=[...data] 

  while(queue.length){
    const node=queue.shift()

    if(node.children.length){
      node.children.forEach(n=>{
        queue.push(n)
      })
    }

    delete node.children

    res.push(node)
  }
  console.log(res)
}

const data = [
  {
    "id": 1,
    "name": "部门1",
    "pid": 0,
    "children": [
      {
        "id": 2,
        "name": "部门2",
        "pid": 1,
        "children": []
      },
      {
        "id": 3,
        "name": "部门3",
        "pid": 1,
        "children": [
          {
            "id": 4,
            "name": "部门4",
            "pid": 3,
            "children": [
              {
                "id": 5,
                "name": "部门5",
                "pid": 4,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
]

treeToList(data)