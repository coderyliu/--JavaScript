// todo 直接通过xhr请求资源(.jpg|.png|.csv|.gif|.svg|.mp4)的时候，可以通过responseType='blob'的方式
// todo 但是现在由于浏览器的安全策略，现在请求资源文件直接下载只能是https协议

// ?1.直接xhr 请求
function request() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.responseType='blob'
    xhr.open('GET', 'http://export-user-data-1253960454.cosgz.myqcloud.com/local_tester_data_export_2019-02-26.csv')
    xhr.send()

    xhr.onreadystatechange=function(){
      if(xhr.status>=200&&xhr.status<300&&xhr.readyState===4){
        resolve(xhr.response)
      }
    }
  })
}

request()

// ?2.直接window.open()
window.open(url)//url也必须是https协议