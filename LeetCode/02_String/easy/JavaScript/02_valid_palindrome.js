/**
 * LeetCode Question: 125. Valid Palindrome
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    let cleanString =  s.toLowerCase().replace(/[^a-z0-9]/g, '')

    let reversed = cleanString.split('').reverse().join('');
    return cleanString === reversed;
};

const s = "A man, a plan, a canal: Panama"
const s2 = "race a car"
console.log(isPalindrome(s2))