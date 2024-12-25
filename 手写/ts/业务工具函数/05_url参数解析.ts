// url参数解析
const url =
  "https://juejin.cn/search?query=%E8%A7%A3%E6%9E%90url%E5%8F%82%E6%95%B0&name=coder&age=21";

// 方式一： 使用URL对象(可以解码url)
const parseUrl = (url: string) => {
  const newUrl = new URL(url);
  return newUrl.searchParams;
};
console.log(parseUrl(url));

// 方式二： 使用URLSearchParams对象(只能解码url)
const parseUrlTwo = (url: string) => {
  const newUrl = new URL(url);
  const searchParams = new URLSearchParams(newUrl.search);
  return searchParams;
};
console.log(parseUrlTwo(url));

// 方式三： split拆分
const parseUrlThree = (url: string) => {
  const search = url.split("?")[1];
  const params = search.split("&");
  const map: { [index: string]: any } = {};
  params.forEach((item) => {
    if (/=/.test(item)) {
      const [key, value] = item.split("=");
      if (map.hasOwnProperty(key)) {
        // map[key] = [].concat(map[key], decodeURIComponent(value));
        map[key] = decodeURIComponent(value);
      } else {
        map[key] = decodeURIComponent(value);
      }
    } else {
      map[item] = "";
    }
  });

  return map;
};
console.log(parseUrlThree(url));

export {};
