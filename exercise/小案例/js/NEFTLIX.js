// 获取元素
const btnEl = document.querySelector('.fa-times')
const whiteAside = document.querySelector('.white-aside')
const redAside = document.querySelector('.red-aside')
const blackAside = document.querySelector('.black-aside')
const barEl = document.querySelector('.fa-bars')

// 绑定事件
btnEl.addEventListener('click', () => {
  whiteAside.style.transitionDelay = '0ms'
  redAside.style.transitionDelay = '300ms'
  blackAside.style.transitionDelay = '500ms'

  whiteAside.style.left = '-25vw'
  redAside.style.left = '-27vw'
  blackAside.style.left = '-29vw'

})

barEl.addEventListener('click', () => {
  whiteAside.style.transitionDelay = '500ms'
  redAside.style.transitionDelay = '300ms'
  blackAside.style.transitionDelay = '0ms'

  whiteAside.style.left = '0'
  redAside.style.left = '0'
  blackAside.style.left = '0'

})