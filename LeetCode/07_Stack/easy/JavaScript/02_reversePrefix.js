// 2000. Reverse Prefix of Word

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = (word, ch) => {
    let idx = -1

    for(let i = 0; i < word.length; i++){
        if(word[i] === ch){
            idx = i
            break
        }
    }

    if(idx === -1) return word;

    let result = word.slice(0, idx+1).split("").reverse().join("") + word.slice(idx+1)

    return result
};

let word = "abcdefd", ch = "d"
// Output: "dcbaefd"

// let word = "xyxzxe", ch = "z"
// Output: "zxyxxe"

// let word = "abcd", ch = "z"
// Output: "abcd"

console.log(reversePrefix(word, ch))
