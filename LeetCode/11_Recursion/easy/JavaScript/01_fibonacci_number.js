// 509 Fibonacci Number

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 0 || n === 1){
        return n
    }
    return fib(n-1) + fib(n-2)
};


let n = 2
// Output: 1

// let n = 3
// Output: 2

// let n = 4
// Output: 3

console.log(fib(n))
