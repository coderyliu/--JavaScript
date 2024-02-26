// 实现方式一：利用map
function getOne(arr) {
  const map = {};

  for (const item of arr) {
    if (!map[item]) {
      map[item] = 1;
    } else {
      map[item]++;
    }
  }

  for (const key in map) {
    if (map[key] === 1) {
      return key;
    }
  }
}
const arr = [1, 2, 2, 3, 4, 5, 3, 4, 5];
console.log(getOne(arr));

// 实现方式二：利用indexOf或者includes遍历
// function getOne(arr){
//   const res=[]

//   for(const item of arr){
//     if(!res.includes(item)){
//       res.push(item)
//     }else{
//       res.splice(res.indexOf(item),1)
//     }
//   }

//   return res
// }
// const arr=[1,2,2,3,4,5,3,4,5]
// console.log(getOne(arr))
