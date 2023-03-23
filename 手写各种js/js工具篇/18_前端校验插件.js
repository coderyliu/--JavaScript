// ?如果不封装插件，使用的话会有以下几点缺陷
// 1.复用性低，冗余代码
// 2.代码量比较大，麻烦
// 3.扩展性不高

// ?自己实现一个校验插件
class Validator{
  // 接受配置的
  // 验证器配置:validatorConfig
  // 针对于表单的配置:targetConfig 

  constructor(config){

  }

  // 验证主逻辑
  check(){

  }

  // 单个表单的验证
  run(){

  }

  // 执行全部表单的验证
  runAll(){

  }

  // 重置表单为初始状态
  reset(){
    
  }
}