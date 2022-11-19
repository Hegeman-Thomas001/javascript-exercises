// leap year divisible by 4 and 400?
const leapYears = function (year) {
  let isLeapYear = false;

  if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
    isLeapYear = true;
  }

  return isLeapYear;

};

// Do not edit below this line
module.exports = leapYears;
