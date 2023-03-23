const axios=require('axios')

axios.get('http://www.coderyliu.online:3000').then(res=>{
  console.log(res)
})

// ?pnpm到底是什么样的原理可以流行这个包管理工具呢 
// todo1.高效快速 当我们pnpm add package的时候，pnpm会把这个package的文件以及依赖的包全部下载到本地的磁盘中
// todo 这时候我们pnpm store path 发现在文件系统当中会有pnpm-store这样的文件夹，来和磁盘中存放的文件建立硬链接
// todo 正如下面所说的，存在这样的.pnpm目录，中有着硬链接，注意：硬链接只能链接文件，而不是文件夹，而且不能跨磁盘硬链接
// todo .pnpm中在存在Install的包，在硬链接pnpm-store目录中，pnpm-store目录在硬链接到磁盘
// *以上就是大概流程

// todo2.严格 在我们的项目中，npm/yarn下载的package会直接放在node_modules目录中，这样做有一个坏处
// todo 就是我们可以引用一个我们没有Install的包，而是Install的包的依赖被下载了，所以uninstall这个包的时候
// todo 可能会把这个包也Uninstall，但是项目中有引用require()或者import这个不是我们Install的包就会出现报错
// *Npm/yarn这样的原因是为了不用重复解压压缩包，共用一个，这里指的是，比如:axios和webpack共同依赖一个包，这样
// *这个包如果想要解压一次，而不用解压多次，npm/yarn的做法是直接全部放在Node_modules目录中，引用这个共同依赖的包
// ?为了解决这个问题,pnpm就出现了非扁平化的处理方式，即在我们的node_modules目录中只存在一个axios或者webpack我们下载的包
// ?而且是一个软链接，链接到node_modules的.pnpm中，这里面是真正的硬链接，有一个axios或者webpack我们的包，在这个包中
// ?在存在node_modules目录，保存它的依赖，依赖也是一个软链接，链接到.pnpm根目录，依赖类推，解决这个问题
