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

// 方法一：迭代（层序遍历）
const treeToList = (root: TreeNode[]): TreeNode[] | null => {
  const res: TreeNode[] = [];
  if (!root.length) return null;
  const queue: TreeNode[] = [...root];
  while (queue.length) {
    const node = queue.shift() as TreeNode;
    if (node.children) {
      queue.push(...node.children);
      delete node.children;
    }
    res.push(node);
  }

  return res;
};

// 方法二：递归（前序遍历）
const treeToListTwo = (root: TreeNode[]): TreeNode[] | null => {
  if (!root.length) return null;
  const res: TreeNode[] = [];
  const dfs = (node: TreeNode[]) => {
    if (!node.length) return;
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

// const list = treeToList(data);
// console.log(list);
const listTwo = treeToListTwo(data);
console.log(listTwo);

export {};
