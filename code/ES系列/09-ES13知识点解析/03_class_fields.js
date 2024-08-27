// ?在Es13中给我们的class类增加了几个fields
// 1.实例上的public/private fields
// 2.类上的public/private fields
// 3.静态代码块

class LyFetch {
  // todo 1.实例上的public/private fields
  // *这个时候我们可以直接这样写,那么这个height会被添加到每一个实例上，这就是public instance fields
  height = 1.88;

  // *如果我们通过private instance fields，这个属性不会被实例访问
  #address = "dalian";

  // todo 2.static上的public/private fields
  // ?我们可以在类上直接添加类属性和类方法
  static friends = ["kobe", "curry", "james"];

  static getFriends() {
    return ["kobe", "qiaodan", "yaoming"];
  }

  // ?那么我们也可以给类属性或者方法加上public/private fields
  // *这种就是public fields
  static nickname = "coder";

  // *这种就是private fields
  static #phone = "19931077936";

  // todo 3.静态代码块实际上java中的概念，现在被添加到js中，用法就是static {}
  static {
    // *这里面的代码会在new Class()的时候最先执行，通常就行一些初始化的操作
    // !并且只会执行一次
    console.log("kobe");
    console.log("curry");
  }

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p = new LyFetch("coder", 22);
console.log(p);

// !下面这种访问方式就会报错，实例的private属性
// console.log(p.#address)

console.log(LyFetch.friends);
console.log(LyFetch.nickname);
// !下面这种访问类的私有属性也会报错
// console.log(LyFetch.#phone)
