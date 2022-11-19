const fibonacci = function (fibNum) {

  const neoFibNum = +fibNum;

  if (neoFibNum < 0) {
    return 'OOPS';
  }

  const arr = [0, 1, 1];

  let value = 0;

  if (neoFibNum === 0 || neoFibNum === 1 || neoFibNum === 2) {
    value = arr[neoFibNum];
  } else {
    for (let i = 3; i <= neoFibNum; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    value = arr.pop();
  }

  return value;

};

// Do not edit below this line
module.exports = fibonacci;
