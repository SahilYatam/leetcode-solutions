/*
* 1768. Merge Strings Alternately
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
    let result = []
    const maxLen = Math.max(word1.length, word2.length)

    for(let i = 0; i < maxLen; i++){
        if(i < word1.length){
            result.push(word1[i])
        } 
        if(i < word2.length){
            result.push(word2[i])
        }
    }
    return result.join("")
};

let word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
console.log(mergeAlternately(word1, word2))