// !try catch只能同步代码
async function foo() {
  try {
    throw new Error();
  } catch (error) {
    return Promise.reject('error');
  }
}

async function boo() {
  try {
    await foo()
  } catch (error) {
    console.log(error);
  }
}

boo()

async function foo2() {
  try {
    throw new Error();
  } catch (error) {
    return Promise.reject('error');
  }
}

function boo2() {
  try {
    // !不能捕捉到错误，foo2是一个异步的函数，try catch不能捕捉
    // foo2()
    // foo2().catch(err => console.log(err))

    // !setTimeout异步的，不能捕捉
    // setTimeout(()=>{
    //   throw new Error('error')
    // })
  } catch (error) {
    console.log(error);
  }
}

boo2()

function foo3() {
  try {
    throw new Error();
  } catch (error) {
    return 'error'
  }
}

function boo3() {
  try {
    foo3()
  } catch (error) {
    console.log(error);
  }
}

boo3()

let a = 1;
function test() {
  try {
    return a;
  } finally {
    ++a;
  }
}
test(); // 2

function test1() {
  try {
    return a;
  } finally {
    ++a;
    return a;
  }
}
test1(); // 3

const obj = { a: 1 };
function test2() {
  try {
    return obj;
  } finally {
    ++obj.a;
  }
}
test2().a; // 2

function test3() {
  try {
    return obj.a;
  } finally {
    ++obj.a;
  }
}
test3(); // 3
