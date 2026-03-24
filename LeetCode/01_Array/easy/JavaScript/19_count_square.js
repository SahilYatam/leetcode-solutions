/**
 * LeetCode question: 1925. Count Square Sum Triples
 */

/**
 * @param {number} n
 * @return {number}
 */
const countTriples = (n) => {
    let count = 0;

    for(let a = 1; a <= n; a++){
        for(let b = 1; b <= n; b++){
            let a_sqaured = a * a;
            let b_sqaured = b * b;

            let sum = a_sqaured + b_sqaured;

            let c = Math.sqrt(sum)

            if(c === Math.floor(c) && c <= n){
                count++;
            }

        }
    }

    return count;
};

let n = 5
console.log(countTriples(n))