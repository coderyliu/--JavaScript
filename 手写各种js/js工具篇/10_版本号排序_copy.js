// 题目描述:有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。
// 现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']

function versionSort(arr){
  return arr.sort((version1,version2)=>{
    const arr1=version1.split('.').map(i=>Number(i))
    const arr2=version2.split('.').map(i=>Number(i))

    let len=Math.max(arr1.length,arr2.length)
    for(let i=0;i<len;i++){
      const num1=arr1[i]===undefined?0:arr1[i]
      const num2=arr2[i]===undefined?0:arr2[i]

      if(num1===num2){
        continue
      }else if(num1>num2){
        return -1
      }else{
        return 1
      }
    }
  })
}

console.log(versionSort(['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']))
