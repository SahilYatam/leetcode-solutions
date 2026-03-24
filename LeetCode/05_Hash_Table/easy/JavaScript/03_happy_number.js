// 202. Happy Number

/**
 * @param {number} n
 * @return {boolean}
 */

function getNextNumber(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        let square = digit * digit;
        sum += square

        n = Math.trunc(n / 10);
    }
    return sum
}

const isHappy = (n) => {
    let set = new Set();

    while(n !== 1) {
        if(set.has(n)){
            return false
        }

        set.add(n)
        n = getNextNumber(n)
    }
    return true
};

let n = 19
// Output: true

/**
 * Explanation:
    12 + 92 = 82
    82 + 22 = 68
    62 + 82 = 100
    12 + 02 + 02 = 1
 */

// let n = 2
// Output: false

console.log(isHappy(n))

