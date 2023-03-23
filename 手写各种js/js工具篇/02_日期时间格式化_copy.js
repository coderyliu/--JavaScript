// 日期时间格式化
// 将utc格式的字符串格式化为: YYYY-MM-DD HH:mm:ss
// ?如果拿到的是时间戳，可以通过new Date(时间戳)拿到时间对象

/**
 * 
 * @param {Date} time 
 */

function formatTime(time){
  let year=time.getFullYear()
  let month=time.getMonth()+1
  month=(month)<10?`0${month}`:month
  let date=time.getDate()
  date=date<10?`0${date}`:date

  let hour=time.getHours()
  hour=hour<10?`0${hour}`:hour
  let minute=time.getMinutes()
  minute=minute<10?`0${minute}`:minute
  let second=time.getSeconds()
  second=second<10?`0${second}`:second

  return `${year}-${month}-${date} ${hour}:${minute}:${second}`
}

console.log(formatTime(new Date()))
