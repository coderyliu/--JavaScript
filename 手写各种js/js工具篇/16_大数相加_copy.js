// 大数相加:
// js最大的安全整数为2**53次方，如果超过该值，就会不准确
// 精度丢失--IEE754标准
// 6453234253452432+7326362323251323

function bigNumberSum(num1,num2){
  const arr1=(num1+'').split('').reverse().map(i=>Number(i))
  const arr2=(num2+'').split('').reverse().map(i=>Number(i))

  const len=Math.max(arr1.length,arr2.length)
  let flag=0
  const arr3=[]
  for(let i=0;i<len;i++){
    const n1=arr1[i]===undefined?0:arr1[i]
    const n2=arr2[i]===undefined?0:arr2[i]

    const sum=n1+n2+flag
    if(sum>=10){
      flag=Math.floor(sum/10)
      arr3.push(sum%10)
    }else{
      flag=0
      arr3.push(sum)
    }
  }

  if(flag){
    arr3.push(flag)
  }

  const res=arr3.reverse().join('')
  console.log(res)
}

bigNumberSum(6453234253452432,7326362323251323)
console.log(BigInt(6453234253452432)+BigInt(7326362323251323))
