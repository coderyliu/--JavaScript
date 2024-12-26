const person = {
  name: "代码与野兽"
};
Object.defineProperty(person, "age", {
  value: 18
});

console.log(person.age); //18
console.log(Object.keys(person)); //['name']

const name1 = "代码与野兽";
age = 18;
//?第一个 false 是因为 delete 只能删除对象上的属性，name 不是属性，所以删除失败。
//?第二个 true 是因为我们不使用任何声明创建变量，它会被视作全局变量，挂载到 window 对象上面，等价于 delete window.age，所以删除成功。
//?第三个 undefined 是因为 age 被删除了。
console.log(delete name1); //false
console.log(delete age); //true
console.log(typeof age); //'undefined'

let person = { name: "代码与野兽" };
const members = [person];
person = null;
console.log(members); //[{name:'代码与野兽'}]

function SuperHero() {
  this.make = "代码与野兽";
  return { make: "野兽与代码" };
}

const mySuperhero = new SuperHero();
console.log(mySuperhero); //{make:'野兽与代码'}

const name = "代码与野兽";
console.log(name.padStart(14)); //‘         代码与野兽’
console.log(name.padStart(2)); //‘代码与野兽’

console.log(parseInt("7")); //7
console.log(parseInt("7*6")); //7
console.log(parseInt("7Din")); //7

[(1, 2, 3, 4)].reduce((x, y) => console.log(x, y)); //1 2 undefined 3 undefined 4

function getUserInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const superHero = "代码与野兽";
const age = 1000;

getUserInfo`${superHero} 是 ${age} 岁`; //['','是','岁'] ‘代码与野兽’ 1000
getUserInfo`hello`; //['hello'] undefined undefined

(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})(); //1 undefined 2

const arr = [7, 1, 4, 3, 2];
for (const elem of arr) {
  setTimeout(() => console.log(elem), elem);
} //1 2 3 4 7

const foo = { bar: 1 };
with (foo) {
  var bar = 2;
}
console.log(foo.bar); //2
