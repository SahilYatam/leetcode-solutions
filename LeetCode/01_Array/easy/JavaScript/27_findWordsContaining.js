// 2942. Find Words Containing Character

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result = []

    for(let i = 0; i < words.length; i++){
        if(words[i].includes(x)){
            result.push(i)
        }
    }

    return result
};

let words = ["leet","code"], x = "e"
// Output: [0,1]

// let words = ["abc","bcd","aaaa","cbc"], x = "a"
// Output: [0,2]

// let words = ["abc","bcd","aaaa","cbc"], x = "z"
// Output: []

console.log(findWordsContaining(words,x))

