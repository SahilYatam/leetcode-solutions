// 1910. Remove All Occurrences of a Substring

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let stack = []

    for(let i = 0; i < s.length; i++){
        stack.push(s[i])
        
        if(stack.length >= part.length){
            let sPart = stack.join("").slice(-part.length)
            if(sPart === part){
                for(let j = 0; j < part.length; j++){
                    stack.pop()
                }
            }
        }
    }
    
    return stack.join("")
};

let s = "daabcbaabcbc", part = "abc"
// Output: "dab"

// let s = "axxxxyyyyb", part = "xy"
// Output: "ab"

console.log(removeOccurrences(s, part))