const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((sum, curr) => sum + curr, 0);

const multiply = (arr) => arr.reduce((sum, curr) => sum * curr, 1);

const power = (a, b) => a ** b;

const factorial = (a) =>
  Array.from({ length: a }, (x, i) => i + 1).reduce(
    (sum, curr) => sum * curr,
    1
  );

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
