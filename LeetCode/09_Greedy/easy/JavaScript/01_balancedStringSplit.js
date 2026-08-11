// 1221. Split a String in Balanced Strings


/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balance = 0, count = 0;

    for(let char of s){
        if(char === "R"){
            balance++
        } else {
            balance--
        }

        if(balance === 0){
            count++
        }
    }

    return count
};

// let s = "RLRRLLRLRL"
// Output: 4

// let s = "RLRRRLLRLL"
// Output: 2

// let s = "LLLLRRRR"
// Output: 1

console.log(balancedStringSplit(s))
