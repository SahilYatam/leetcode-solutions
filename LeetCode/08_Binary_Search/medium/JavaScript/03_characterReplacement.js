// 424. Longest Repeating Character Replacement

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0, right = 0;
    let maxLen = 0, maxFreq = 0;

    let hashMap = new Map()

    while(right < s.length){
        if(hashMap.has(s[right])){
            hashMap.set(s[right], hashMap.get(s[right]) + 1)
        } else {
            hashMap.set(s[right], 1)
        }
        maxFreq = Math.max(maxFreq, hashMap.has(s[right]))
        right++

        while(right - left - maxFreq > k){
            hashMap.set(s[left], hashMap.get(s[left]) - 1)

            left++
        }
        maxLen = Math.max(maxLen, right-left)
    }

    return maxLen
};

let s = "ABCDE", k = 1
// Output: 2

// let s = "AABABBA", k = 1
// Output: 4

// let s = "AABAAABAA", k = 1
// # Output: 6

console.log(characterReplacement(s, k))
