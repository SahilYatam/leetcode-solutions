/**
 * 392. Is Subsequence
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    if (s.length === 0) return true;

    let a = 0
    let b = 0

    while(b < t.length){
        if(s[a] === t[b]){
            a++
            b++
        } else {
            b++
        }
    }
    console.log("a:", a)
    return a === s.length
}

// const isSubsequence = (s, t) => {
//     let count = 0
//     for(let i = 0; i < s.length; i++){
//         for(let j = 0; j < t.length; j++){
//             if(t[j] === s[i]){
//                 count++
//             }
//         }
//     }
//     if(count === s.length) {
//         return true
//     } else {
//         return false
//     }
// };

// let s = "abc", t = "ahbgdc"
// Output: true

let s = "axc", t = "ahbgdc"
// Output: false
console.log(isSubsequence(s, t))
