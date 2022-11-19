const repeatString = function (str, timesRepeated) {
  let retStrRepeated = '';

  if (timesRepeated < 0) {
    retStrRepeated = 'ERROR';

  } else if (timesRepeated > 0) {
    for (let i = 0; i < timesRepeated; i++) {
      retStrRepeated += str;
    }
  }

  return retStrRepeated;
};

// Do not edit below this line
module.exports = repeatString;
