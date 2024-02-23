/**
 * @description 将日期时间格式化为字符串
 * @param {string|number|Date} time
 * @param {string} type
 */
const formatTime = (time, type) => {
  const date = new Date(time);
  let formatDate;

  switch (type) {
    case "yyyy-MM-dd hh:mm:ss":
      formatDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      break;
    case "yyyy-MM-dd":
      formatDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      break;
    case "yyyy-MM":
      formatDate = `${date.getFullYear()}-${date.getMonth() + 1}`;
      break;
    case "hh:mm":
      formatDate = `${date.getHours()}-${date.getMinutes()}`;
      break;
    default:
      formatDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      break;
  }

  return formatDate;
};

console.log(formatTime(1708656719928));
