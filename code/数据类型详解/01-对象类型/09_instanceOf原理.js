// instanceOf 是用来判断一个类是否在实例的原型链上
const lyInstanceOf = (father, child) => {
  const fp = father.prototype;
  let cp = child.__proto__;

  while (cp) {
    if (cp === fp) return true;
    cp = cp.__proto__;
  }

  return false;
};

function Person() {
  this.name = "coder";
}

const p = new Person();

console.log(lyInstanceOf(Person, p));
