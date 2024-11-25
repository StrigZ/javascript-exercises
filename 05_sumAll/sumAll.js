const sumAll = function (firstNumber, secondNumber) {
  if (
    firstNumber < 0 ||
    secondNumber < 0 ||
    typeof firstNumber !== "number" ||
    typeof secondNumber !== "number" ||
    !Number.isInteger(firstNumber) ||
    !Number.isInteger(secondNumber)
  ) {
    return "ERROR";
  }

  let sum = 0;
  if (secondNumber > firstNumber) {
    for (; firstNumber <= secondNumber; firstNumber++) {
      sum += firstNumber;
    }
  } else {
    for (; secondNumber <= firstNumber; secondNumber++) {
      sum += secondNumber;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
