const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}

const log = function (value) {
  console.log(value);
}

const operation = () => {
  return divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5);
}

log(operation());