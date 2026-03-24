// 696. Count Binary Substrings

/**
 * @param {string} s
 * @return {number}
 */

const countBinarySubstrings = (s) => {
    let prev = 0;
    let curr = 1;
    let result = 0;

    for(let i = 1; i < s.length; i++){
        if(s[i] === s[i - 1]){
            curr++
        } else {
            result += Math.min(prev, curr)
            prev = curr
            curr = 1
        }
    }
    result += Math.min(prev, curr)

    return result
};

let s = "00110011"
// Output: 6

// let s = "10101"
// Output: 4

console.log(countBinarySubstrings(s))