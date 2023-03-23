// 1234567变人民币形式1,234,567

function formatMoney(money){
  let str=(money+'').split('').reverse()
  let count=0

  for(let i=0;i<str.length;i++){
    if(count!==3){
      count++
    }else{
      str.splice(i,0,',')
      count=0
    }
  }

  let res=str.reverse().join('')
  console.log(res)
}

formatMoney(1234567)
formatMoney(123456789)
formatMoney(1234567899)

