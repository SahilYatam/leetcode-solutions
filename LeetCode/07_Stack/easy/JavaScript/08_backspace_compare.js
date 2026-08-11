// 844. Backspace String Compare

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sStack = []
    let tStack = []

    for(let char of s){
        if(char === "#"){
            if(sStack.length !== 0){
                sStack.pop()
            }
        }else {
            sStack.push(char)
        }
    }

    for(let char of t){
        if(char === "#"){
            if(tStack.length !== 0){
                tStack.pop()
            }
        } else {
            tStack.push(char)
        }
    }

    return sStack.join() === tStack.join();
};


let s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// let s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// let s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".


console.log(backspaceCompare(s, t));