/**
 * LeetCode question: 20. Valid Parentheses
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    let stack = [];

    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for(let char of s){
        if(char in map){
            if(stack.length === 0){
                return false;
            }

            const top = stack.pop()

            if(top !== map[char]){
                return false; // Mismatch
            }
        } else {
            stack.push(char)
        }
        
    } 
    return stack.length === 0;
};
let s = "()[]{}"
console.log(isValid(s))