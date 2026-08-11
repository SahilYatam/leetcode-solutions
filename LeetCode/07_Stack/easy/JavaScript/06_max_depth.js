// 1614. Maximum Nesting Depth of the Parentheses

/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = (s) => {
    let counter = 0,
        maxCounter = 0;

    for (let char of s) {
        if (char === "(") {
            counter++;
        } else if (char === ")") {
            counter--;
        }

        maxCounter = Math.max(maxCounter, counter);
    }

    return maxCounter;
};

let s = "(1+(2*3)+((8)/4))+1";
// Output: 3

// let s = "(1)+((2))+(((3)))"
// // Output: 3

// let s = "()(())((()()))"
// Output: 3

console.log(maxDepth(s));
