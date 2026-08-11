// 1047. Remove All Adjacent Duplicates In String


/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = (s) => {
    let stack = []

    for(let char of s){
        if(stack.length !== 0 && stack[stack.length - 1] === char){
            stack.pop()
        }
        else{
            stack.push(char)
        }
    }
    return stack.join("")
};


let s = "abbaca"
// Output: "ca"

// let s = "azxxzy"
// Output: "ay"

console.log(removeDuplicates(s))
