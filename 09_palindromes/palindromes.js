const palindromes = function (str) {

  const lowercaseStr = str.toLowerCase();
  console.log(lowercaseStr);
  let low = 0;
  let high = lowercaseStr.length - 1;
  let lowCharCode = 0;
  let highCharCode = 0;

  while (low < high) {

    lowCharCode = lowercaseStr.charCodeAt(low);
    highCharCode = lowercaseStr.charCodeAt(high);

    while (lowCharCode < 97 || lowCharCode > 122) {
      low++;
      lowCharCode = lowercaseStr.charCodeAt(low);
    }
    while (highCharCode < 97 || highCharCode > 122) {
      high--;
      highCharCode = lowercaseStr.charCodeAt(high);
    }

    if (lowCharCode !== highCharCode) {
      return false;
    }

    low++;
    high--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
