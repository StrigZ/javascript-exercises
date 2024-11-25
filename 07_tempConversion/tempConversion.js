const convertToCelsius = function (t) {
  return +parseFloat((t - 32) * (5 / 9)).toFixed(1);
};

const convertToFahrenheit = function (t) {
  return +parseFloat((t * 9) / 5 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
