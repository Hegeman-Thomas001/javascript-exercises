// Looked up, since I was confused about accumulator being null at the start
// or undefined, though I was close enough.
const findTheOldest = function (people) {

  return people.reduce((acc, curr) => {
    const accAge = acc.yearOfDeath - acc.yearOfBirth;
    const currAge = curr.yearOfDeath - curr.yearOfBirth;

    return accAge > currAge ? acc : curr;

  });

};

// Do not edit below this line
module.exports = findTheOldest;
