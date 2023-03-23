// ?Es13中新增了err捕捉错误，可以利用error.cause查看原因

function userAction() {
  try {
    apiCallThatCanThrow();
  } catch (err) {
    throw new Error('New error message', {
      cause: err
    });
  }
}

try {
  userAction();
} catch (err) {
  console.log(err);
  console.log(`Cause by: ${err.cause}`);
}