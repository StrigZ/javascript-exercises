const findTheOldest = function (arr) {
  let currOldestPerson = arr[0];

  arr.forEach((thisPerson) => {
    const currOldestPersonYearOfBirth = currOldestPerson.yearOfBirth;
    const currOldestPersonYearOfDeath = (currOldestPerson.yearOfDeath ??=
      new Date().getFullYear());

    const thisPersonYearOfBirth = thisPerson.yearOfBirth;
    const thisPersonYearOfDeath = (thisPerson.yearOfDeath ??=
      new Date().getFullYear());

    const currOldestPersonAge =
      currOldestPersonYearOfDeath - currOldestPersonYearOfBirth;

    if (thisPersonYearOfDeath - thisPersonYearOfBirth > currOldestPersonAge) {
      currOldestPerson = thisPerson;
    }
  });

  return currOldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
