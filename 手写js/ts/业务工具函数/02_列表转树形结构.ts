type Node = {
  id: number;
  name: string;
  pid: number;
  children?: Node[];
};

const data: Node[] = [
  // 注意这里，专门把pid为1的元素放一个在前面
  {
    id: 2,
    name: "部门2",
    pid: 1
  },
  {
    id: 1,
    name: "部门1",
    pid: 0
  },
  {
    id: 3,
    name: "部门3",
    pid: 1
  },
  {
    id: 4,
    name: "部门4",
    pid: 3
  },
  {
    id: 5,
    name: "部门5",
    pid: 4
  },
  {
    id: 7,
    name: "部门7",
    pid: 6
  }
];

const listToTree = (list: Node[]): Node[] | null => {
  if (!list.length) return null;
  const root: Node[] = [];
  // 借助哈希表
  const map: {
    [index: number]: any;
  } = {};

  list.forEach((node) => {
    const { id, pid } = node;
    map[id] = {
      ...node,
      children: map[id]?.children || []
    };

    const treeNode = map[id];
    if (pid === 0) {
      // 处理根节点
      root.push(treeNode);
    } else {
      if (!map[pid]) {
        map[pid] = {
          children: []
        };
      }
      map[pid].children.push(treeNode);
    }
  });

  return root;
};

const root = listToTree(data);
console.log(root);

export {};
