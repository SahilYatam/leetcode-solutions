// 3121. Count the Number of Special Characters II

/**
 * @param {string} word
 * @return {number}
 */
const numberOfSpecialChars = function (word) {
  let count = 0;

  let lowercase_positions = new Map(),
    uppercase_positions = new Map();

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      lowercase_positions.set(word[i], i);
    }
    if (word[i] === word[i].toUpperCase()) {
      if (!uppercase_positions.has(word[i])) {
        uppercase_positions.set(word[i], i);
      }
    }
  }

  for (let [char, val] of lowercase_positions) {
    if (
      uppercase_positions.has(char.toUpperCase()) &&
      lowercase_positions.get(char) <
        uppercase_positions.get(char.toUpperCase())
    ) {
      count++;
    }
  }

  return count;
};

// let word = "aaAbcBC";
// Output: 3

// let word = "abc"
// Output: 0

let word = "AbBCab"
// Output: 0

console.log(numberOfSpecialChars(word));
