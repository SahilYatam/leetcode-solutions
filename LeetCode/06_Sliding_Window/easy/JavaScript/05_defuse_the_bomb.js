// 1652. Defuse the Bomb

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */

const decrypt = (code, k) => {
    if (k === 0) {
        return Array(code.length).fill(0)
    }

    let n = code.length
    let result = new Array(n)
    let windowSize = Math.abs(k)
    let sum = 0

    if(k > 0){
        for(let i = 1; i <= windowSize; i++){
            sum += code[i % n]
        }
    } else {
        for (let i = 1; i <= windowSize; i++) {
            sum += code[(n - i) % n]
        }
    }


    for (let i = 0; i < n; i++) {
        result[i] = sum

        if (k > 0) {
            sum -= code[(i + 1) % n]
            sum += code[(i + k + 1) % n]
        }
        else if (k < 0) {
            sum -= code[(i - windowSize + n) % n]
            sum += code[i]
        }
    }
    return result
};


let code = [5, 7, 1, 4], k = 3
// Output: [12,10,16,13]

// let code = [1,2,3,4], k = 0
// Output: [0,0,0,0]

// let code = [2,4,9,3], k = -2
// Output: [12,5,6,13]

console.log(decrypt(code, k))