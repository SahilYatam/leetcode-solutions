// 3090. Maximum Length Substring With Two Occurrences

/**
 * @param {string} s
 * @return {number}
 */

const maximumLengthSubstring = (s) => {
    let freqMap = new Map();
    let left = 0;
    let maxLength = 0
    let currLen = 0

    for (let right = 0; right < s.length; right++) {
        freqMap.set(s[right], (freqMap.get(s[right]) || 0) + 1);

        while (freqMap.get(s[right]) > 2) {
            freqMap.set(s[left], freqMap.get(s[left]) - 1);
            if (freqMap.get(s[left]) === 0) {
                freqMap.delete(s[left])
            }
            left++;
        }
        currLen = right - left + 1
        maxLength = Math.max(maxLength, currLen)
    }
    return maxLength
};

// let s = "bcbbbcba";
// Output: 4

let s = "aaaa"
// Output: 2

console.log(maximumLengthSubstring(s));
