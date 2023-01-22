const isLogged = true;

function createRandom(condition) {
  return new Promise((res, rej) => {
    if (condition) {
      res(Math.random());
    } else {
      rej(new Error("Not logged"));
    }
  });
}

function printObj(random) {
  if (random > 0.5) {
    return Promise.resolve(
      `{name: "John", age: 24} the random number is : ${random}`
    );
  } else {
    return Promise.reject(
      new Error(
        `random is less than 0.5, try again! the random number is : ${random}`
      )
    );
  }
}

createRandom(isLogged)
  .then(printObj)
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
