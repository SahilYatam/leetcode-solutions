// 2696. Minimum String Length After Removing Substrings

/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    let stack = [], n = s.length;

    for (let i = 0; i < n; i++) {
        if (stack && stack[stack.length - 1] === "A" && s[i] == "B") {
            stack.pop()
        }
        else if (stack && stack[stack.length - 1] === "C" && s[i] === "D") {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }

    return stack.length
};

let s = "ABFCACDB"
// Output: 2

// let s = "ACBBD"
// Output: 5

console.log(minLength(s))
