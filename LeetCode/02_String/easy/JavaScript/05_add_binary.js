/**
 * LeetCode question: 67.Add Binary
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let s = parseInt(a,2) + parseInt(b,2)
    return s.toString(2)
};

let a = "11"
let b = "1"

console.log(addBinary(a,b))