const palindromes = (word) => {
  const cleanedWord = word
    .trim()
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(" ")
    .join("");

  return cleanedWord.split("").reverse().join("") === cleanedWord;
};

// Do not edit below this line
module.exports = palindromes;
