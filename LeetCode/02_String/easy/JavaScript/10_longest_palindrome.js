// 409. Longest Palindrome

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
    let freq = new Map();
    let length = 0;
    let hasOdd = false;

    // count frequencies
    for (let i = 0; i < s.length; i++) {
        freq.set(s[i], (freq.get(s[i]) || 0) + 1);
    }

    // build palindrome length
    for (let count of freq.values()) {
        if (count % 2 == 0) {
            length += count;
        } else {
            length += count - 1;
            hasOdd = true;
        }
    }

    if (hasOdd) length += 1;

    return length;
};

let s = "abccccdd";
// Output: 7

// let s = "a"
// Output: 1

console.log(longestPalindrome(s));
