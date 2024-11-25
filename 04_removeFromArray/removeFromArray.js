const removeFromArray = (array, ...args) =>
  args.length === 0 ? "ERROR" : array.filter((i) => !args.includes(i));

// Do not edit below this line
module.exports = removeFromArray;
