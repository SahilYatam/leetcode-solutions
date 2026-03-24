/**
 * LeetCode question: 1071. Greatest Common Divisor of Strings
 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

function findGCD(a, b){
    if(a === 0) return b;
    return findGCD(b % a, a);
}

const gcdOfStrings = (str1, str2) => {
    if(str1 + str2 !== str2 + str1) return "";

    let gcd = findGCD(str1.length, str2.length)

    return str1.slice(0, gcd)
};

let str1 = "ABCABC", str2 = "ABC"
// let str1 = "LEET", str2 = "CODE"

console.log(gcdOfStrings(str1, str2))