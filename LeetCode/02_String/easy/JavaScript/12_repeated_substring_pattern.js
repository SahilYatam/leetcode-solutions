// 459. Repeated Substring Pattern

/**
 * @param {string} s
 * @return {boolean}
 */

// One liner

// const repeatedSubstringPattern = (s) => {
//     return (s + s).slice(1, -1).includes(s)
// };


const repeatedSubstringPattern = (s) => {
    let sLen = s.length;
    for (let i = 1; i <= sLen / 2; i++) {

        if (sLen % i === 0) {
            let subStr = s.slice(0, i);
            let repeated = subStr.repeat(sLen / i);
            if (repeated === s) {
                return true;
            }
        }

    }
    return false;
};

// let s = "abab";
// Output: true

// let s = "aba"
// Output: false

let s = "abcabcabcabc"
// Output: true

console.log(repeatedSubstringPattern(s));
