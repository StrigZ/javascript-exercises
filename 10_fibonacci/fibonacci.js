const fibonacci = (member) => {
  if (typeof member !== "number") {
    member = +member;
  }

  if (member < 0) {
    return "OOPS";
  }

  if (member === 0) {
    return 0;
  }

  // create a fibonacci row up to `member` element
  const fibonacci = [1, 1];

  for (let i = 2; i <= member; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci[member - 1];
};

// Do not edit below this line
module.exports = fibonacci;
