// 1021. Remove Outermost Parentheses

/**
 * @param {string} s
 * @return {string}
 */
const removeOuterParentheses = function(s) {
    let result = ""
    let balance = 0

    for(let ch of s){
        if(ch === "("){
            if (balance > 0){
                result += ch
            }
            balance++
        }
        else if(ch === ")"){
            balance--
            if(balance > 0){
                result += ch
            }
        }
    }
    return result
};


let s = "(()())(())"
// Output: "()()()"

// let s = "(()())(())(()(()))"
// Output: "()()()()(())"

// let s = "()()"
// Output: ""

console.log(removeOuterParentheses(s))