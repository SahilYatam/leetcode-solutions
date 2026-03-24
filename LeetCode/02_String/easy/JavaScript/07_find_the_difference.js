/**
 * LeetCode question: 389. Find the Difference
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// var findTheDifference = function(s, t) {
//     if(s.length === 0) return t;
//     if(t.length === 0) return s;

//     let map = new Map()
//     let char1 = s.split("")
//     let char2 = t.split("")

//     for(let i = 0; i < char1.length; i++){
//         if(!map.has(char1[i])){
//             map.set(char1[i], 1)
//         }
//     }
//     for(let j = 0; j < char2.length; j++){
//         let val = map.get(char2[j])
//         if(map.has(char2[j])){
//             map.set(char2[j], val + 1)
//         } else {
//             map.set(char2[j], 1)
//         }
//     }

//     for(const [key, val] of map.entries()){
//         if(val === 1){
//             return key
//         }
//     }
// };


const findTheDifference = (s, t) => {
    let sumT = 0;
    let sumS = 0;

    for(let i = 0; i < t.length; i++){
        sumT += t.charCodeAt(i)
    }
    for(let j = 0; j < s.length; j++){
        sumS += s.charCodeAt(j)
    }
    
    return String.fromCharCode(sumT - sumS)
}

let s = "abcd"
let t = "abcde"
console.log(findTheDifference(s, t))