// ?以前我们想要使用await必须在一个函数前面加上async 现在可以直接使用await
// !并不是可以直接使用，而是在模块的最顶端使用

const fetchMusicData = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("get", "http://www.coderyliu.online:3000/homepage/block/page");
    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      }
    };
  });
};

// todo before
const beforeFetch = async () => {
  const res = await fetchMusicData();

  console.log(res);
  console.log(1);
};

// beforeFetch()

//todo after
const afterFetch = () => {
  const ret = fetchMusicData();

  console.log(res);
};

await afterFetch();
console.log(1);
