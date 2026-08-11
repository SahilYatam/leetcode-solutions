// 3174. Clear Digits

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = []

    for(let char of s){
        if(char.match(/\d/)){
            if(stack.length !== 0){
                stack.pop()
            }
        }
        else {
            stack.push(char)
        }
    }
    return stack.join('')
};

let s = "leet15code0"
// Output: "lecod"

// let s = "abc"
// Output: "abc"

// let s = "cb34"
// Output: ""

console.log(clearDigits(s))