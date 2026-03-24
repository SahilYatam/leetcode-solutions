/**
 * LeetCode question: 58. Length of Last Word
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop().length;
};

let s = "Hello World"
console.log(lengthOfLastWord(s))