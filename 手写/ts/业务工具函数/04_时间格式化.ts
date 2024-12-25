/**
 * @description 将日期时间格式化为字符串
 */
// ?Date() 构造函数接受的参数可以是一个时间戳，也可以是一个日期字符串，或者是一个 Date 对象。
const formatDate = (
  timestamp: number | string | Date,
  type: string = "YYYY-MM-DD"
): string => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  let formatDate: string = "";
  switch (type) {
    case "YYYY-MM-DD":
      formatDate = `${year}-${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
      }`;
      break;
    case "YYYY-MM-DD HH:mm:ss":
      formatDate = `${year}-${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
      } ${hour < 10 ? "0" + hour : hour}:${
        minute < 10 ? "0" + minute : minute
      }:${seconds < 10 ? "0" + seconds : seconds}`;
      break;
    case "YYYY/MM/DD":
      formatDate = `${year}/${month < 10 ? "0" + month : month}/${
        day < 10 ? "0" + day : day
      }`;
      break;
    case "YYYY/MM/DD HH:mm:ss":
      formatDate = `${year}/${month < 10 ? "0" + month : month}/${
        day < 10 ? "0" + day : day
      } ${hour < 10 ? "0" + hour : hour}:${
        minute < 10 ? "0" + minute : minute
      }:${seconds < 10 ? "0" + seconds : seconds}`;
      break;
    case "MM-DD":
      formatDate = `${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
      }`;
      break;
  }

  return formatDate;
};

console.log(formatDate("2022-01-01", "YYYY/MM/DD"));

export {};
