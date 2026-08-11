// 3120. Count the Number of Special Characters I

/**
 * @param {string} word
 * @return {number}
 */
const numberOfSpecialChars = function(word) {
    let count = 0
    let word_set = new Set(word)

    for(let char of word_set) {
        if(char === char.toLowerCase()){
            if(word_set.has(char.toUpperCase())){
                count++
            }
        }
    }

    return count
};

let word = "aaAbcBC"
// Output: 3

// let word = "abc"
// Output: 0

// let word = "abBCab"
// Output: 1

console.log(numberOfSpecialChars(word))
