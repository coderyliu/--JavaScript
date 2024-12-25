function removeEmptySublists(data) {
  if (Array.isArray(data)) {
    return data.map((item) => {
      if (
        item.subList &&
        Array.isArray(item.subList) &&
        item.subList.length > 0
      ) {
        item.subList = removeEmptySublists(item.subList);
      }
      // 仅在 subList 存在且不为空时剔除
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
  return data;
}

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

// 调用函数以删除空的 subList
const result = removeEmptySublists(data);

// 打印结果
console.log(JSON.stringify(result, null, 4));
