// 290 Word Pattern

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
    const word = s.split(" ");
    if (word.length !== pattern.length) return false;

    const firstMap = new Map();
    const secondMap = new Map();

    for (let i = 0; i < pattern.length; i++) {
        if (firstMap.has(pattern[i])) {
            let val = firstMap.get(pattern[i])
            if (val !== word[i]) {
                return false
            }
        } else {
            firstMap.set(pattern[i], word[i]);
        }

        if (secondMap.has(word[i])) {
            let val = secondMap.get(word[i])
            if (val !== pattern[i]) {
                return false
            }
        } else {
            secondMap.set(word[i], pattern[i])
        }
    }

    return true
};

let pattern = "abba", s = "dog cat cat dog"
// Output: true

// let pattern = "abba", s = "dog cat cat fish"
// Output: false

// let pattern = "aaaa", s = "dog cat cat dog"
// Output: false

// let pattern = "ab", s = "dog dog"
// Output: false

console.log(wordPattern(pattern, s))
