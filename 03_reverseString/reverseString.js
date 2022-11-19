const reverseString = function (str) {
  let reversedStr = '';

  if (str !== '') {
    reversedStr = str.split('').reverse().join('');
  }

  return reversedStr;

};

// Do not edit below this line
module.exports = reverseString;
