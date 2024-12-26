type TreeNode = {
  id: number;
  name: string;
  pid: number;
  children?: TreeNode[];
};

const data: TreeNode[] = [
  {
    id: 1,
    name: "部门1",
    pid: 0,
    children: [
      {
        id: 2,
        name: "部门2",
        pid: 1,
        children: []
      },
      {
        id: 3,
        name: "部门3",
        pid: 1,
        children: [
          {
            id: 4,
            name: "部门4",
            pid: 3,
            children: [
              {
                id: 5,
                name: "部门5",
                pid: 4,
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
];

const treeToList = (root: TreeNode[]): TreeNode[] => {
  // 方式一：迭代（广度优先遍历）
  // const queue: TreeNode[] = [...root];
  // const res: TreeNode[] = [];
  // while (queue.length) {
  //   const node = queue.shift()!;
  //   if (node.children) {
  //     queue.push(...node.children);
  //   }
  //   delete node.children;
  //   res.push(node);
  // }
  // return res;

  // 方式二：递归（深度优先遍历）
  const res: TreeNode[] = [];
  const dfs = (node: TreeNode[]) => {
    node.forEach((item) => {
      if (item.children) {
        dfs(item.children);
        delete item.children;
      }
      res.push(item);
    });
  };
  dfs(root);
  return res;
};

const list = treeToList(data);
console.log(list);

export {};
