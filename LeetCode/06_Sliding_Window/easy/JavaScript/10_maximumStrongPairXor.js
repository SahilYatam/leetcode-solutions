// 2932. Maximum Strong Pair XOR I

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumStrongPairXor = (nums) => {
    let sortArr = nums.sort((a, b) => a - b)
    let maxXor = 0;
    let j = 0;
    let n = sortArr.length

    for(let i = 0; i < n; i++){
        // expand window
        while(j < n && sortArr[j] <= 2 * sortArr[i]){
            j++
        }

        // now window is [i...j - 1]

        // compute max XOR inside window
        for(let k = i; k < j; k++){
            for(let l = k + 1; l < j; l++){
                maxXor = Math.max(maxXor, sortArr[k] ^ sortArr[l])
            }
        }

    }

    return maxXor
};

// let nums = [1,2,3,4,5]
// Output: 7

// let nums = [10,100]
// Output: 0

let nums = [5,6,25,30]
// Output: 7

console.log(maximumStrongPairXor(nums));
