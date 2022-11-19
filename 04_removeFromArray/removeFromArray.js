const removeFromArray = function (arr, ...valsToRemove) {
  const retArray = [];
  const valsToRemoveSet = new Set(valsToRemove);

  for (const el of arr) {
    if (!valsToRemoveSet.has(el)) {
      retArray.push(el);
    }
  }

  return retArray;

};

// Do not edit below this line
module.exports = removeFromArray;
