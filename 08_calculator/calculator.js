const add = function (numOne, numTwo) {

  return numOne + numTwo;

};

const subtract = function (numOne, numTwo) {

  return numOne - numTwo;

};

const sum = function (arr) {

  return arr.reduce(((acc, curr) => acc + curr), 0);

};

const multiply = function (arr) {

  return arr.reduce(((acc, curr) => acc * curr), 1);

};

const power = function (base, exponent) {

  return base ** exponent;

};

const factorial = function (num) {

  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
