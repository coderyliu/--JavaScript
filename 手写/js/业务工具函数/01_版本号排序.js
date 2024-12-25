// 题目描述：有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。
// 现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']
const version = [
  "0.1.1",
  "2.3.3",
  "0.302.1",
  "4.2",
  "4.3.5",
  "4.3.4.5",
  "4.3.4.5.6"
];

const versionSort = (version) => {
  if (!Array.isArray(version)) return;

  return version.sort((v1, v2) => {
    // console.log(v1, v2)
    // return v1 -v2 是生序
    // return v2- v1 是降序
    // > 0 v1在v2后 [v2, v1]
    // < 0 v1在v2前 [v1, v2]
    // = 0 不交换位置
    const v1Arr = v1.split(".");
    const v2Arr = v2.split(".");

    const vLen = Math.max(v1Arr.length, v2Arr.length);
    for (let i = 0; i < vLen; i++) {
      if (v1Arr[i] === undefined || v2Arr[i] === undefined)
        return v1Arr.length - v2Arr.length;
      if (v1Arr[i] === v2Arr[i]) continue;
      return v2Arr[i] - v1Arr[i];
    }
  });
};

console.log(versionSort(version));
