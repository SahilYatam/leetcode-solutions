// 1089. Duplicate Zeros

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

const duplicateZeros = (arr) => {
    const n = arr.length;
    let zeroCount = 0;

    // 1. Count zeros
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) zeroCount++;
    }

    // 2. Virtual write pointer
    let writeP = n + zeroCount - 1;

    for (let i = n - 1; i >= 0; i--) {

        // Non-zero write once
        if (arr[i] !== 0) {
            if (writeP < n) {
                arr[writeP] = arr[i]
            }
            writeP--
        }
        // Zero write twice
        else {
            if (writeP < n) {
                arr[writeP] = 0
            }
            writeP--
            if (writeP < n) {
                arr[writeP] = 0
            }
            writeP--
        }
    }
    return arr
};


let arr = [1, 0, 2, 3, 0, 4, 5, 0]
// Output: [1,0,0,2,3,0,0,4]



// let arr = [1,2,3]
// Output: [1,2,3]

console.log(duplicateZeros(arr))