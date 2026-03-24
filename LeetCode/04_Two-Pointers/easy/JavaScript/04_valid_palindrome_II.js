// 680. Valid Palindrome II

/**
 * @param {string} s
 * @return {boolean}
 */

const checkPalindrome = (left, right, s) => {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

const validPalindrome = (s) => {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] === s[right]) {
            left++
            right--
        }
        else {
            return (
                checkPalindrome(left + 1, right, s) ||
                checkPalindrome(left, right - 1, s)
            )
        }
    }
    return true
};

// let s = "aba"
// Output: true

// let s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

let s = "abc"
// Output: false

console.log(validPalindrome(s))