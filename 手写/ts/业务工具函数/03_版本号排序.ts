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

const sortVersion = (version: string[]): string[] => {
  version.sort((v1, v2) => {
    const v1Arr = v1.split(".");
    const v2Arr = v2.split(".");
    const len = Math.min(v1Arr.length, v2Arr.length);
    for (let i = 0; i < len; i++) {
      const n1 = Number(v1Arr[i]);
      const n2 = Number(v2Arr[i]);
      if (n1 > n2) return -1;
      if (n1 < n2) return 1;
    }
    return v2Arr.length - v1Arr.length;
  });

  return version;
};

console.log(sortVersion(version));

export {};
