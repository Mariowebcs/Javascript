

function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    let result = number*value;
    console.log(result)
  }
  return inner;
}

multiplyByTwo(4)();
