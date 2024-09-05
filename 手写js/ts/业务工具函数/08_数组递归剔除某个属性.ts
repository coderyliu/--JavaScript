// 示例 JSON 数组
const data = [
  {
    cause: "SOP执行",
    isLeafNode: 1,
    subList: [
      {
        cause: "未按SOP话术",
        isLeafNode: 0,
        subList: []
      },
      {
        cause: "未引导“悦压”打卡",
        isLeafNode: 0,
        subList: []
      },
      {
        cause: "漏打标签",
        isLeafNode: 0,
        subList: []
      }
    ]
  },
  {
    cause: "晖致客诉",
    isLeafNode: 0,
    subList: []
  }
];

function removeEmptySubList(arr: any[]) {
  return arr.map((item) => {
    if (
      item.subList &&
      Array.isArray(item.subList) &&
      item.subList.length > 0
    ) {
      item.subList = removeEmptySubList(item.subList);
    }

    if (
      item.subList &&
      Array.isArray(item.subList) &&
      item.subList.length === 0
    ) {
      delete item.subList;
    }

    return item;
  });
}

const result = removeEmptySubList(data);
console.log(result);

export {};
