/**
 * 151. Reverse Words in a String
 */

/**
 * @param {string} s
 * @return {string}
 */

// const reverseWords = (s) => {
//     let str = s.trim().split(/\s+/)
//     return str.reverse().join(" ")
// }

const reverseWords = (s) => {

    let str = s.trim().split(/\s+/)
    let result = []
    for(let i = str.length -1; i >= 0; i--){
        result.push(str[i])
    }
    return result.join(" ")
};

// let s = "the sky is blue"
let s = "a good   example"
// Output: "blue is sky the"
console.log(reverseWords(s));
