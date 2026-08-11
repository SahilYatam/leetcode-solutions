// 1876. Substrings of Size Three with Distinct Characters

/**
 * @param {string} s
 * @return {number}
 */

// const countGoodSubstrings = (s) => {
//     let goodString = 0;
//     for (let i = 0; i < s.length - 2; i++) {
//         if (s[i] !== s[i + 1] && s[i] !== s[i + 2] && s[i + 1] !== s[i + 2]) {
//             goodString++;
//         }
//     }
//     return goodString;
// };

// Sliding window approach
const countGoodSubstrings = (s) => {
    let freqMap = new Map();
    let left = 0;
    let goodString = 0;

    for (let right = 0; right < s.length; right++) {
        // 1. Add incoming character
        freqMap.set(s[right], (freqMap.get(s[right]) || 0) + 1);

        // 2. Shrink window if size > 3
        if(right - left + 1 > 3){
            freqMap.set(s[left], freqMap.get(s[left]) - 1)
            if(freqMap.get(s[left]) === 0){
                freqMap.delete(s[left])
            }
            left++
        }
        
        // 3. Check valid window
        if(right - left + 1 === 3 && freqMap.size === 3){
            goodString++
        }
    }
    return goodString;
};

// let s = "xyzzaz";
// Output: 1

let s = "aababcabc";
// Output: 4

console.log(countGoodSubstrings(s));
